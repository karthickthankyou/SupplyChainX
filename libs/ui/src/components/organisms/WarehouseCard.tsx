import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { Description } from '../atoms/typography'
import { format } from 'date-fns'
import { UpsertInventory } from './UpsertInventory'
import Image from 'next/image'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
}

export const WarehouseCard = ({ warehouse }: WarehouseProps) => {
  return (
    <div className="warehouse-card">
      <div className="text-xl font-semibold">{warehouse.name}</div>
      <Description>{warehouse.description}</Description>
      <p className="text-sm text-gray">
        {format(new Date(warehouse.createdAt), 'PP')}
      </p>
      <div className="flex items-center gap-2 mt-4 mb-2 ">
        <div className="font-semibold">Inventory</div>
        <UpsertInventory warehouse={warehouse} />
      </div>
      {warehouse.inventories.length === 0 ? <div>Empty.</div> : null}
      <ul className="grid grid-cols-4 gap-4">
        {warehouse.inventories.map((inventory) => (
          <li
            key={inventory.product.name}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={inventory.product.image || ''}
              width={200}
              height={200}
              className="w-full aspect-square"
              alt={''}
            />
            <div className="h-full p-2 bg-white">
              <div className="text-xs">{inventory.product.name}</div>
              <div className="text-xl">{inventory.quantity}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
