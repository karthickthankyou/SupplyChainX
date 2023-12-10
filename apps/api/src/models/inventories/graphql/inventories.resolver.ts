import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { InventoriesService } from './inventories.service'
import { Inventory } from './entity/inventory.entity'
import {
  FindManyInventoryArgs,
  FindUniqueInventoryArgs,
} from './dtos/find.args'
import { CreateInventoryInput } from './dtos/create-inventory.input'
import { UpdateInventoryInput } from './dtos/update-inventory.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Product } from 'src/models/products/graphql/entity/product.entity'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@Resolver(() => Inventory)
export class InventoriesResolver {
  constructor(
    private readonly inventoriesService: InventoriesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Inventory)
  createInventory(@Args('createInventoryInput') args: CreateInventoryInput) {
    return this.inventoriesService.create(args)
  }

  @Query(() => [Inventory], { name: 'inventories' })
  findAll(@Args() args: FindManyInventoryArgs) {
    return this.inventoriesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Inventory], { name: 'myInventory' })
  myInventory(
    @Args() args: FindManyInventoryArgs,
    @GetUser() user: GetUserType,
  ) {
    return this.inventoriesService.findAll({
      ...args,
      where: {
        ...args.where,
        warehouse: { is: { manufacturerId: { equals: user.uid } } },
      },
    })
  }

  @AllowAuthenticated()
  @Mutation(() => Inventory)
  async reduceInventory(
    @Args('warehouseId') warehouseId: number,
    @Args('productId') productId: number,
    @Args('quantity') quantity: number,
    @GetUser() user: GetUserType,
  ): Promise<Inventory | null> {
    await this.inventoriesService.checkWarehouseOwner({
      uid: user.uid,
      warehouseId,
    })

    const inventory = await this.prisma.inventory.findFirst({
      where: { productId, warehouseId },
    })
    return this.prisma.inventory.update({
      where: { id: inventory.id },
      data: { quantity: { decrement: quantity } },
    })
  }

  @AllowAuthenticated()
  @Mutation(() => Inventory)
  async transferInventory(
    @Args('fromWarehouseId') fromWarehouseId: number,
    @Args('toWarehouseId') toWarehouseId: number,
    @Args('productId') productId: number,
    @Args('quantity') quantity: number,
    @GetUser() user: GetUserType,
  ): Promise<Inventory | null> {
    return this.prisma.$transaction(async (prisma) => {
      await this.inventoriesService.checkWarehouseOwner({
        uid: user.uid,
        warehouseId: fromWarehouseId,
      })
      // 1. Check sender inventory
      const senderInventory = await prisma.inventory.findFirst({
        where: { productId, warehouseId: fromWarehouseId },
      })

      if (!senderInventory) {
        throw new Error('Sender inventory does not exist')
      }

      if (senderInventory.quantity < quantity) {
        throw new Error('Insufficient inventory for transfer')
      }

      // 2. Update sender inventory
      await prisma.inventory.update({
        where: { id: senderInventory.id },
        data: { quantity: { decrement: quantity } },
      })

      // 3. Check if receiver inventory exists
      const receiverInventory = await prisma.inventory.findFirst({
        where: { productId, warehouseId: toWarehouseId },
      })

      // 4. Update or create receiver inventory
      if (receiverInventory) {
        await prisma.inventory.update({
          where: { id: receiverInventory.id },
          data: { quantity: { increment: quantity } },
        })
      } else {
        await prisma.inventory.create({
          data: {
            quantity,
            productId,
            warehouseId: toWarehouseId,
          },
        })
      }

      await prisma.transaction.create({
        data: {
          quantity,
          fromWarehouseId,
          toWarehouseId,
          productId,
        },
      })

      // 5. Return sender inventory after successful transfer
      return senderInventory
    })
  }

  @Query(() => Inventory, { name: 'inventory' })
  findOne(@Args() args: FindUniqueInventoryArgs) {
    return this.inventoriesService.findOne(args)
  }

  @Mutation(() => Inventory)
  updateInventory(@Args('updateInventoryInput') args: UpdateInventoryInput) {
    return this.inventoriesService.update(args)
  }

  @Mutation(() => Inventory)
  removeInventory(@Args() args: FindUniqueInventoryArgs) {
    return this.inventoriesService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() inventory: Inventory) {
    return this.prisma.product.findUnique({
      where: { id: inventory.productId },
    })
  }

  @ResolveField(() => Warehouse)
  warehouse(@Parent() inventory: Inventory) {
    return this.prisma.inventory.findUnique({
      where: { id: inventory.id },
    }).warehouse
  }
}
