import { getAuth } from '@foundation/common/src/authOptions'
import { CreateWarehouse } from '@foundation/ui/src/components/organisms/CreateWarehouse'
import { redirect } from 'next/navigation'

export default async function WarehousesPage() {
  const user = await getAuth()
  return (
    <CreateWarehouse
      redirectUrl="/manufacturer/warehouses"
      warehouseRole={{ manufacturerId: user?.user?.uid }}
    />
  )
}
