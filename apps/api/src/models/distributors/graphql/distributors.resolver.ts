import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { DistributorsService } from './distributors.service'
import { Distributor } from './entity/distributor.entity'
import {
  FindManyDistributorArgs,
  FindUniqueDistributorArgs,
} from './dtos/find.args'
import { CreateDistributorInput } from './dtos/create-distributor.input'
import { UpdateDistributorInput } from './dtos/update-distributor.input'

@Resolver(() => Distributor)
export class DistributorsResolver {
  constructor(private readonly distributorsService: DistributorsService) {}

  @Mutation(() => Distributor)
  createDistributor(
    @Args('createDistributorInput') args: CreateDistributorInput,
  ) {
    return this.distributorsService.create(args)
  }

  @Query(() => [Distributor], { name: 'distributors' })
  findAll(@Args() args: FindManyDistributorArgs) {
    return this.distributorsService.findAll(args)
  }

  @Query(() => Distributor, { name: 'distributor' })
  findOne(@Args() args: FindUniqueDistributorArgs) {
    return this.distributorsService.findOne(args)
  }

  @Mutation(() => Distributor)
  updateDistributor(
    @Args('updateDistributorInput') args: UpdateDistributorInput,
  ) {
    return this.distributorsService.update(args)
  }

  @Mutation(() => Distributor)
  removeDistributor(@Args() args: FindUniqueDistributorArgs) {
    return this.distributorsService.remove(args)
  }
}
