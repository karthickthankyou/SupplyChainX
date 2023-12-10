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
