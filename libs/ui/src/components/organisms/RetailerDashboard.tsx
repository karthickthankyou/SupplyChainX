import { RetailerMeQuery } from '@foundation/network/src/generated'

export const RetailerDashboard = ({ retailerMe }: RetailerMeQuery) => {
  return (
    <div>
      Dashboard
      <div>{retailerMe?.uid}</div>
    </div>
  )
}
