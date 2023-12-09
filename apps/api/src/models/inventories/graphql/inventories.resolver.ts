import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { InventoriesService } from './inventories.service'
import { Inventory } from './entity/inventory.entity'
import {
  FindManyInventoryArgs,
  FindUniqueInventoryArgs,
} from './dtos/find.args'
import { CreateInventoryInput } from './dtos/create-inventory.input'
import { UpdateInventoryInput } from './dtos/update-inventory.input'

@Resolver(() => Inventory)
export class InventoriesResolver {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Mutation(() => Inventory)
  createInventory(@Args('createInventoryInput') args: CreateInventoryInput) {
    return this.inventoriesService.create(args)
  }

  @Query(() => [Inventory], { name: 'inventories' })
  findAll(@Args() args: FindManyInventoryArgs) {
    return this.inventoriesService.findAll(args)
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
}
