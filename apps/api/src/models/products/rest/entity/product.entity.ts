import { Product } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ProductEntity
  implements RestrictProperties<ProductEntity, Product>
{
  createdAt: Date
  updatedAt: Date
  id: number
  name: string
  description: string
  manufacturerId: string
}
