import { ManufacturerMeQuery } from '@foundation/network/src/generated'

export const ManufacturerDashboard = ({
  manufacturerMe,
}: ManufacturerMeQuery) => {
  return (
    <div>
      Dashboard
      <div>{manufacturerMe?.uid}</div>
    </div>
  )
}
