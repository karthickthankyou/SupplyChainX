import { InputType, PickType } from '@nestjs/graphql'
import { Warehouse } from '../entity/warehouse.entity'
import { CreateLocationInputWithoutWarehouseId } from 'src/models/locations/graphql/dtos/create-location.input'

@InputType()
export class CreateWarehouseInput extends PickType(
  Warehouse,
  ['name', 'description'],
  InputType,
) {
  address: CreateLocationInputWithoutWarehouseId
  manufacturerId: string
}
