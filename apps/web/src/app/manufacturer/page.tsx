import {
  ManufacturerMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { ManufacturerDashboard } from '@foundation/ui/src/components/organisms/ManufacturerDashboard'

export default async function EmployerPage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.manufacturerMe],
      },
    },
  })

  if (!data?.manufacturerMe) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Employer account not found.</div>
  }

  return <ManufacturerDashboard manufacturerMe={data?.manufacturerMe} />
}
