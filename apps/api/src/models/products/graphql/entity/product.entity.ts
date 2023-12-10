import { Field, ObjectType } from '@nestjs/graphql'
import { Product as ProductType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Product implements RestrictProperties<Product, ProductType> {
  @Field({ nullable: true })
  image: string
  id: number
  name: string
  @Field({ nullable: true })
  description: string
  createdAt: Date
  updatedAt: Date
  manufacturerId: string
}
