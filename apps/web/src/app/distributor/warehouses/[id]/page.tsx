import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  WarehouseDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { WarehouseCard } from '@foundation/ui/src/components/organisms/WarehouseCard'

export default async function ProductPage({
  params,
}: {
  params: { id: number }
}) {
  const { data, error } = await fetchGraphQLServer({
    document: WarehouseDocument,
    variables: {
      where: { id: +params.id },
    },
    config: {
      next: {
        tags: [namedOperations.Query.warehouse],
      },
    },
  })

  if (!data?.warehouse) {
    return <div>Warehouse not found.</div>
  }

  return <WarehouseCard warehouse={data.warehouse} />
}
