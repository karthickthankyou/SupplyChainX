import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  MyProductsDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/generated'

export default async function WarehousesPage() {
  const { data, error } = await fetchGraphQLServer({
    document: MyProductsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.myWarehouses],
      },
    },
  })
  return <div>Hello products {data?.myProducts.length} </div>
}
