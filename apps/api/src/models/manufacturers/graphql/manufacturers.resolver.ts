import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ManufacturersService } from './manufacturers.service'
import { Manufacturer } from './entity/manufacturer.entity'
import {
  FindManyManufacturerArgs,
  FindUniqueManufacturerArgs,
} from './dtos/find.args'
import { CreateManufacturerInput } from './dtos/create-manufacturer.input'
import { UpdateManufacturerInput } from './dtos/update-manufacturer.input'

@Resolver(() => Manufacturer)
export class ManufacturersResolver {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Mutation(() => Manufacturer)
  createManufacturer(
    @Args('createManufacturerInput') args: CreateManufacturerInput,
  ) {
    return this.manufacturersService.create(args)
  }

  @Query(() => [Manufacturer], { name: 'manufacturers' })
  findAll(@Args() args: FindManyManufacturerArgs) {
    return this.manufacturersService.findAll(args)
  }

  @Query(() => Manufacturer, { name: 'manufacturer' })
  findOne(@Args() args: FindUniqueManufacturerArgs) {
    return this.manufacturersService.findOne(args)
  }

  @Mutation(() => Manufacturer)
  updateManufacturer(
    @Args('updateManufacturerInput') args: UpdateManufacturerInput,
  ) {
    return this.manufacturersService.update(args)
  }

  @Mutation(() => Manufacturer)
  removeManufacturer(@Args() args: FindUniqueManufacturerArgs) {
    return this.manufacturersService.remove(args)
  }
}
