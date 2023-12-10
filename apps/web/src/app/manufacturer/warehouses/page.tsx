import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  MyWarehousesDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/generated'
import Link from 'next/link'

export default async function WarehousesPage() {
  const { data, error } = await fetchGraphQLServer({
    document: MyWarehousesDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.myWarehouses],
      },
    },
  })

  console.log('data, error  ', data, error)
  return (
    <div>
      <div className="flex justify-between">
        <div>Warehouses</div>
        <Link href="/manufacturer/createWarehouse">New</Link>
      </div>
      Hello warehouses
      {data?.myWarehouses.length}
    </div>
  )
}
