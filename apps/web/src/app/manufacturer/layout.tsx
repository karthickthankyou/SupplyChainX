import Link from 'next/link'
import { CreateManufacturerAccount } from '@foundation/ui/src/components/organisms/CreateManufacturer'
import { ManufacturerMenu } from '@foundation/ui/src/components/organisms/ManufacturerMenu'
import { ManufacturerSidebar } from '@foundation/ui/src/components/organisms/ManufacturerSidebar'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { getAuth } from '@foundation/common/src/authOptions'
import {
  ManufacturerMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { Suspense } from 'react'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: ManufacturerMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.manufacturerMe],
      },
    },
  })

  console.log('data, error ', data, error)

  const manufacturerMe = data?.manufacturerMe

  if (!manufacturerMe) {
    return <CreateManufacturerAccount uid={user.user.uid} />
  }

  return (
    <div className="flex gap-4 mt-2 ">
      <div className="hidden w-full max-w-xs sm:block">
        <ManufacturerMenu manufacturerMe={manufacturerMe} />
      </div>

      <div className="flex-grow ">
        <div className="sm:hidden">
          <ManufacturerSidebar manufacturerMe={manufacturerMe} />
        </div>
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  )
}
