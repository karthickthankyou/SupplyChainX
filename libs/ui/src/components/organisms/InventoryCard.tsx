import { MyWarehousesQuery } from '@foundation/network/src/generated'
import Image from 'next/image'
import { TransferGoods } from './TransferGoods'
import { SellGoods } from './SellGoods'

export const InventoryCard = ({
  inventory,
  warehouseId,
}: {
  inventory: MyWarehousesQuery['myWarehouses'][0]['inventories'][0]
  warehouseId: number
}) => {
  return (
    <div className="flex overflow-hidden border border-white rounded-lg shadow-lg">
      <Image
        src={inventory.product.image || ''}
        width={200}
        height={200}
        className="object-cover w-36 h-36 "
        alt={''}
      />
      <div className="flex flex-col p-2 bg-white w-36 h-36">
        <div className="text-xs">{inventory.product.name}</div>
        <div className="text-xl font-semibold">{inventory.quantity}</div>
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <TransferGoods warehouseId={warehouseId} inventory={inventory} />
          <SellGoods warehouseId={warehouseId} inventory={inventory} />
        </div>
      </div>
    </div>
  )
}
