import { DistributorMeQuery } from '@foundation/network/src/generated'

export const DistributorDashboard = ({ distributorMe }: DistributorMeQuery) => {
  return (
    <div>
      Dashboard
      <div>{distributorMe?.uid}</div>
    </div>
  )
}
