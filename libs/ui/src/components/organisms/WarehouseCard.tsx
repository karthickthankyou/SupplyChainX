import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { Description } from '../atoms/typography'
import { format } from 'date-fns'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
}

export const WarehouseCard = ({ warehouse }: WarehouseProps) => {
  return (
    <div className="warehouse-card">
      <div className="text-lg font-semibold">{warehouse.name}</div>
      <Description>{warehouse.description}</Description>
      <p className="text-sm text-gray">
        {format(new Date(warehouse.createdAt), 'PP')}
      </p>
      <h4>Inventories</h4>
      <ul>
        {warehouse.inventories.map((inventory) => (
          <li key={inventory.product.name}>
            {inventory.product.name} - {inventory.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}
