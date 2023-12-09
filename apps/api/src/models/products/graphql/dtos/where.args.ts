import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { InventoryListRelationFilter } from 'src/models/inventories/graphql/dtos/where.args'
import { ManufacturerRelationFilter } from 'src/models/manufacturers/graphql/dtos/where.args'
import { TransactionListRelationFilter } from 'src/models/transactions/graphql/dtos/where.args'

@InputType()
export class ProductWhereUniqueInput {
  id: number
}

@InputType()
export class ProductWhereInputStrict
  implements
    RestrictProperties<ProductWhereInputStrict, Prisma.ProductWhereInput>
{
  id: IntFilter
  name: StringFilter
  description: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  manufacturerId: StringFilter
  manufacturer: ManufacturerRelationFilter
  inventories: InventoryListRelationFilter
  transactions: TransactionListRelationFilter

  AND: ProductWhereInput[]
  OR: ProductWhereInput[]
  NOT: ProductWhereInput[]
}

@InputType()
export class ProductWhereInput extends PartialType(ProductWhereInputStrict) {}

@InputType()
export class ProductListRelationFilter {
  every?: ProductWhereInput
  some?: ProductWhereInput
  none?: ProductWhereInput
}

@InputType()
export class ProductRelationFilter {
  is?: ProductWhereInput
  isNot?: ProductWhereInput
}
