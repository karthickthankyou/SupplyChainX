import Link from 'next/link'
import { CreateRetailerAccount } from '@foundation/ui/src/components/organisms/CreateRetailer'
import {
  RetailerMenu,
  RetailerSidebar,
} from '@foundation/ui/src/components/organisms/RetailerMenu'
import { ManufacturerSidebar } from '@foundation/ui/src/components/organisms/ManufacturerSidebar'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { getAuth } from '@foundation/common/src/authOptions'
import {
  DistributorMeDocument,
  ManufacturerMeDocument,
  RetailerMeDocument,
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
    document: RetailerMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.retailerMe],
      },
    },
  })

  console.log('data, error ', data, error)

  const retailerMe = data?.retailerMe

  if (!retailerMe) {
    return <CreateRetailerAccount uid={user.user.uid} />
  }

  return (
    <div className="flex gap-4 mt-2 ">
      <div className="hidden w-full max-w-xs sm:block">
        <RetailerMenu retailerMe={retailerMe} />
      </div>

      <div className="flex-grow ">
        <div className="sm:hidden">
          <RetailerSidebar retailerMe={retailerMe} />
        </div>
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}
