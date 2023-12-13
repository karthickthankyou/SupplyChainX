import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { UpsertInventory } from './UpsertInventory'
import { TransactionsTable } from './TransactionsTable'
import { Title2 } from '../atoms/typography'
import { InventoryCard } from './InventoryCard'
import { WarehouseDetails } from './WarehouseDetails'

type WarehouseProps = {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
  showUpsertInventory?: boolean
}

export const WarehouseCard = ({
  warehouse,
  showUpsertInventory = false,
}: WarehouseProps) => {
  return (
    <div className="space-y-8">
      <WarehouseDetails warehouse={warehouse} />

      <div>
        <div className="flex items-center gap-2 mt-4 mb-2 ">
          <div className="font-semibold">Inventory</div>
          {showUpsertInventory ? (
            <UpsertInventory warehouse={warehouse} />
          ) : null}
        </div>
        {warehouse.inventories.length === 0 ? <div>Empty.</div> : null}
        <div className="flex flex-wrap gap-4">
          {warehouse.inventories.map((inventory) => (
            <InventoryCard
              inventory={inventory}
              key={inventory.product.id}
              warehouseId={warehouse.id}
            />
          ))}
        </div>
      </div>
      <div>
        <Title2>Ins</Title2>
        <TransactionsTable transactions={warehouse.ins} />
      </div>
      <div>
        <Title2>Outs</Title2>
        <TransactionsTable transactions={warehouse.outs} />
      </div>
    </div>
  )
}
