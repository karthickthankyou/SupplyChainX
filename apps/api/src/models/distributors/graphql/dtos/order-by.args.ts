import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/dtos/order-by.args'
import { WarehouseOrderByRelationAggregateInput } from 'src/models/warehouses/graphql/dtos/order-by.args'

@InputType()
export class DistributorOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      DistributorOrderByWithRelationInputStrict,
      Prisma.DistributorOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  warehouses: WarehouseOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class DistributorOrderByWithRelationInput extends PartialType(
  DistributorOrderByWithRelationInputStrict,
) {}

@InputType()
export class DistributorOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
