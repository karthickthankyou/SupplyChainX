import { InputType, PickType } from '@nestjs/graphql'
import { Warehouse } from '../entity/warehouse.entity'

@InputType()
export class CreateWarehouseInput extends PickType(
  Warehouse,
  ['name'],
  InputType,
) {}
