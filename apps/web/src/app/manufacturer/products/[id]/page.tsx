import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  ProductDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { ProductFlow } from '@foundation/ui/src/components/organisms/ProductFlow'

export default async function ProductPage({
  params,
}: {
  params: { id: number }
}) {
  const { data, error } = await fetchGraphQLServer({
    document: ProductDocument,
    variables: {
      where: { id: +params.id },
    },
    config: {
      next: {
        tags: [namedOperations.Query.product],
      },
    },
  })

  return <ProductFlow product={data?.product} />
}
