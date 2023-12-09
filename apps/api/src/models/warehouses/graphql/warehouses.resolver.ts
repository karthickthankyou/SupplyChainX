import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { WarehousesService } from './warehouses.service'
import { Warehouse } from './entity/warehouse.entity'
import {
  FindManyWarehouseArgs,
  FindUniqueWarehouseArgs,
} from './dtos/find.args'
import { CreateWarehouseInput } from './dtos/create-warehouse.input'
import { UpdateWarehouseInput } from './dtos/update-warehouse.input'

@Resolver(() => Warehouse)
export class WarehousesResolver {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Mutation(() => Warehouse)
  createWarehouse(@Args('createWarehouseInput') args: CreateWarehouseInput) {
    return this.warehousesService.create(args)
  }

  @Query(() => [Warehouse], { name: 'warehouses' })
  findAll(@Args() args: FindManyWarehouseArgs) {
    return this.warehousesService.findAll(args)
  }

  @Query(() => Warehouse, { name: 'warehouse' })
  findOne(@Args() args: FindUniqueWarehouseArgs) {
    return this.warehousesService.findOne(args)
  }

  @Mutation(() => Warehouse)
  updateWarehouse(@Args('updateWarehouseInput') args: UpdateWarehouseInput) {
    return this.warehousesService.update(args)
  }

  @Mutation(() => Warehouse)
  removeWarehouse(@Args() args: FindUniqueWarehouseArgs) {
    return this.warehousesService.remove(args)
  }
}
