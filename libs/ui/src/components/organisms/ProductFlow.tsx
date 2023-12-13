'use client'

import { Map as WorldMap } from './Map'
import { initialViewState } from '@foundation/util/constants'
import { ProductQuery } from '@foundation/network/src/generated'
import { Marker } from './Map/MapMarker'
import { DefaultZoomControls } from './Map/ZoomControls/ZoomControls'
import { Panel } from './Map/Panel'
import { Factory, LucideIcon, Store, Warehouse } from 'lucide-react'
import { MapLine } from './Map/MapLine'

type Transactions = ProductQuery['product']['transactions']
const aggregateTransactions = (transactions?: Transactions): Transactions => {
  const transactionsMap = new Map<string, Transactions[number]>()

  transactions?.forEach((transaction) => {
    if (!transaction.fromWarehouse || !transaction.toWarehouse) {
      return // Skip transactions without from or to warehouses
    }

    const key = `${transaction.fromWarehouse.id},${transaction.toWarehouse.id}`

    if (transactionsMap.has(key)) {
      const existingTransaction = transactionsMap.get(key)
      if (existingTransaction) {
        existingTransaction.quantity += transaction.quantity
      }
    } else {
      transactionsMap.set(key, { ...transaction })
    }
  })

  return Array.from(transactionsMap.values())
}

export const ProductFlow = ({
  product,
}: {
  product?: ProductQuery['product']
}) => {
  return (
    <WorldMap initialViewState={initialViewState}>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>
      {product?.inventories.map((inventory) => (
        <Marker
          anchor="bottom"
          offset={[0, -6]}
          key={inventory.id}
          longitude={inventory.warehouse.location?.longitude || 0}
          latitude={inventory.warehouse.location?.latitude || 0}
        >
          {inventory.warehouse.manufacturer ? (
            <StyledIcon Icon={Factory} />
          ) : null}
          {inventory.warehouse.distributor ? (
            <StyledIcon Icon={Warehouse} />
          ) : null}
          {inventory.warehouse.retailer ? <StyledIcon Icon={Store} /> : null}
          <div className="absolute p-1 font-semibold translate-y-1/3 -translate-x-1/3 bottom-full left-full">
            {inventory.quantity}
          </div>
        </Marker>
      ))}
      {aggregateTransactions(product?.transactions).map((transaction) => (
        <MapLine
          key={transaction.id}
          from={transaction.fromWarehouse?.location}
          to={transaction.toWarehouse?.location}
          lineId={`${transaction.id}`}
        >
          {transaction.quantity}
        </MapLine>
      ))}
    </WorldMap>
  )
}

export const StyledIcon = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <Icon className="stroke-2 p-0.5 rounded shadow-lg shadow-black/20 bg-black/80 border border-black text-white" />
  )
}
