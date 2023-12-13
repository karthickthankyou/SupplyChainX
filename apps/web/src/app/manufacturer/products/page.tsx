import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  MyProductsDocument,
  SortOrder,
  namedOperations,
} from '@foundation/network/src/generated'
import Link from 'next/link'
import { ProductCard } from '@foundation/ui/src/components/organisms/ProductCard'
import { Title } from '@foundation/ui/src/components/atoms/typography'

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
  return (
    <div>
      <div className="flex justify-between mb-6">
        <Title>Products</Title>
        <Link href="/manufacturer/createProduct">New</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.myProducts.map((product) => (
          <Link href={`/manufacturer/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}
