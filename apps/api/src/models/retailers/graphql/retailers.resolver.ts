import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { RetailersService } from './retailers.service'
import { Retailer } from './entity/retailer.entity'
import { FindManyRetailerArgs, FindUniqueRetailerArgs } from './dtos/find.args'
import { CreateRetailerInput } from './dtos/create-retailer.input'
import { UpdateRetailerInput } from './dtos/update-retailer.input'

@Resolver(() => Retailer)
export class RetailersResolver {
  constructor(private readonly retailersService: RetailersService) {}

  @Mutation(() => Retailer)
  createRetailer(@Args('createRetailerInput') args: CreateRetailerInput) {
    return this.retailersService.create(args)
  }

  @Query(() => [Retailer], { name: 'retailers' })
  findAll(@Args() args: FindManyRetailerArgs) {
    return this.retailersService.findAll(args)
  }

  @Query(() => Retailer, { name: 'retailer' })
  findOne(@Args() args: FindUniqueRetailerArgs) {
    return this.retailersService.findOne(args)
  }

  @Mutation(() => Retailer)
  updateRetailer(@Args('updateRetailerInput') args: UpdateRetailerInput) {
    return this.retailersService.update(args)
  }

  @Mutation(() => Retailer)
  removeRetailer(@Args() args: FindUniqueRetailerArgs) {
    return this.retailersService.remove(args)
  }
}
