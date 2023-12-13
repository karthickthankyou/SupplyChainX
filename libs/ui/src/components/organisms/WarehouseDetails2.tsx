import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { MapLink } from './MapLink'
import { StaticMapSimple } from './StaticMap'
import { format } from 'date-fns'

export const WarehouseDetails2 = ({
  warehouse,
}: {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
}) => {
  return (
    <div className="flex flex-col gap-2">
      <MapLink
        lat={warehouse.location?.latitude}
        lng={warehouse.location?.longitude}
      >
        <StaticMapSimple
          position={{
            lat: warehouse.location?.latitude,
            lng: warehouse.location?.longitude,
          }}
          className="w-full border-2 border-white rounded-lg shadow-lg aspect-square"
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
  )
}
