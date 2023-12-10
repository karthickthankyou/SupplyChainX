import { Product } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ProductEntity
  implements RestrictProperties<ProductEntity, Product>
{
  @IsOptional()
  image: string
  createdAt: Date
  updatedAt: Date
  id: number
  name: string
  @IsOptional()
  description: string
  manufacturerId: string
}
