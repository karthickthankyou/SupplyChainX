import { getAuth } from '@foundation/common/src/authOptions'
import { namedOperations } from '@foundation/network/src/generated'
import { CreateWarehouse } from '@foundation/ui/src/components/organisms/CreateWarehouse'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function WarehousesPage() {
  const user = await getAuth()
  return (
    <CreateWarehouse
      warehouseRole={{ distributorId: user?.user?.uid }}
      redirectUrl="/distributor/warehouses"
    />
  )
}
