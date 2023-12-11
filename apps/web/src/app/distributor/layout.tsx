import Link from 'next/link'
import { CreateDistributorAccount } from '@foundation/ui/src/components/organisms/CreateDistributor'
import {
  DistributorMenu,
  DistributorSidebar,
} from '@foundation/ui/src/components/organisms/DistributorMenu'
import { ManufacturerSidebar } from '@foundation/ui/src/components/organisms/ManufacturerSidebar'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { getAuth } from '@foundation/common/src/authOptions'
import {
  DistributorMeDocument,
  ManufacturerMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { Suspense } from 'react'

export default async function DistributorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: DistributorMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.distributorMe],
      },
    },
  })

  const distributorMe = data?.distributorMe

  if (!distributorMe) {
    return <CreateDistributorAccount uid={user.user.uid} />
  }

  return (
    <div className="flex gap-4 mt-2 ">
      <div className="hidden w-full max-w-xs sm:block">
        <DistributorMenu distributorMe={distributorMe} />
      </div>

      <div className="flex-grow ">
        <div className="sm:hidden">
          <DistributorSidebar distributorMe={distributorMe} />
        </div>
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}
