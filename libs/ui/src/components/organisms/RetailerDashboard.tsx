import { RetailerMeQuery } from '@foundation/network/src/generated'
import { StatCard } from './StatCard'

export const RetailerDashboard = ({ retailerMe }: RetailerMeQuery) => {
  console.log('retailerMe ', retailerMe)
  return (
    <div>
      Dashboard
      <div>{retailerMe?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Warehouses'}
          href={'/retailer/warehouses'}
          count={retailerMe?.warehouses.length}
        />
      </div>
    </div>
  )
}
