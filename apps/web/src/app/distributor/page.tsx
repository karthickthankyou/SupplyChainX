import {
  DistributorMeDocument,
  ManufacturerMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { DistributorDashboard } from '@foundation/ui/src/components/organisms/DistributorDashboard'

export default async function DistributorPage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQLServer({
    document: DistributorMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.distributorMe],
      },
    },
  })

  if (!data?.distributorMe) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Distributor account not found.</div>
  }

  return <DistributorDashboard distributorMe={data?.distributorMe} />
}
