import { ObjectType } from '@nestjs/graphql'
import { Product as ProductType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Product implements RestrictProperties<Product, ProductType> {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  manufacturerId: string
}
