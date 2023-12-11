import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { format } from 'date-fns'
import { UpsertInventory } from './UpsertInventory'
import Image from 'next/image'
import { TransferGoods } from './TransferGoods'
import { MapLink } from './MapLink'
import { StaticMapSimple } from './StaticMap'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
  showUpsertInventory?: boolean
}

export const WarehouseCard = ({
  warehouse,
  showUpsertInventory = false,
}: WarehouseProps) => {
  return (
    <div className="warehouse-card">
      <div className="flex gap-2">
        <MapLink
          lat={warehouse.location?.latitude}
          lng={warehouse.location?.longitude}
        >
          <StaticMapSimple
            position={{
              lat: warehouse.location?.latitude,
              lng: warehouse.location?.longitude,
            }}
            className="border-2 border-white rounded-lg shadow-lg w-36 h-36"
          />
        </MapLink>
        <div className="mb-2 ">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 text-xl font-semibold border-2 border-black rounded-lg">
              #{warehouse.id}
            </div>
            <div className="text-xl font-semibold">{warehouse.name}</div>
          </div>
          <div className="text-sm">{warehouse.location?.address}</div>
          <div className="text-sm">{warehouse.description}</div>
          <div className="text-sm text-gray">
            {format(new Date(warehouse.createdAt), 'PP')}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 mb-2 ">
        <div className="font-semibold">Inventory</div>
        {showUpsertInventory ? <UpsertInventory warehouse={warehouse} /> : null}
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
              className="object-cover w-full aspect-square"
              alt={''}
            />
            <div className="h-full p-2 bg-white">
              <div className="text-xs">{inventory.product.name}</div>
              <div className="text-xl">{inventory.quantity}</div>
              <TransferGoods warehouseId={warehouse.id} inventory={inventory} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
