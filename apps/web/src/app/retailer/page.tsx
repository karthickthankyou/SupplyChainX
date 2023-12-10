import {
  DistributorMeDocument,
  ManufacturerMeDocument,
  RetailerMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { RetailerDashboard } from '@foundation/ui/src/components/organisms/RetailerDashboard'

export default async function DistributorPage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQLServer({
    document: RetailerMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.retailerMe],
      },
    },
  })

  if (!data?.retailerMe) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Retailer account not found.</div>
  }

  return <RetailerDashboard retailerMe={data?.retailerMe} />
}
