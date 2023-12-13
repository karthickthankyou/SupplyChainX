import { ManufacturerMeQuery } from '@foundation/network/src/generated'
import { StatCard } from './StatCard'

export const ManufacturerDashboard = ({
  manufacturerMe,
}: ManufacturerMeQuery) => {
  return (
    <div>
      Dashboard
      <div>{manufacturerMe?.uid}</div>
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Products'}
          count={manufacturerMe?.products.length}
          href={'/manufacturer/products'}
        />
        <StatCard
          title={'Warehouses'}
          href={'/manufacturer/warehouses'}
          count={manufacturerMe?.warehouses.length}
        />
      </div>
    </div>
  )
}
