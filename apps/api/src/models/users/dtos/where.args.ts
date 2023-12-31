import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { DistributorRelationFilter } from 'src/models/distributors/graphql/dtos/where.args'
import { ManufacturerRelationFilter } from 'src/models/manufacturers/graphql/dtos/where.args'
import { RetailerRelationFilter } from 'src/models/retailers/graphql/dtos/where.args'

@InputType()
export class UserWhereUniqueInput {
  uid: string
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<Prisma.UserWhereInput, 'credentials' | 'authProvider'>
    >
{
  manufacturer: ManufacturerRelationFilter
  distributor: DistributorRelationFilter
  retailer: RetailerRelationFilter
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  name: StringFilter
  image: StringFilter

  AND: UserWhereInput[]
  OR: UserWhereInput[]
  NOT: UserWhereInput[]
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}
