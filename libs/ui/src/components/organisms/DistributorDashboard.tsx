import { DistributorMeQuery } from '@foundation/network/src/generated'
import { StatCard } from './StatCard'

export const DistributorDashboard = ({ distributorMe }: DistributorMeQuery) => {
  return (
    <div>
      Dashboard
      <div>{distributorMe?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Warehouses'}
          href={'/distributor/warehouses'}
          count={distributorMe?.warehouses.length}
        />
      </div>
    </div>
  )
}
