import { DistributorMeQuery } from '@foundation/network/src/generated'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Title2 } from '../atoms/typography'
import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'
import { Button } from '../atoms/button'
import { Menu } from 'lucide-react'

export const DistributorMenu = ({ distributorMe }: DistributorMeQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <Image
        src={distributorMe?.user.image || ''}
        alt=""
        width={300}
        height={300}
      />
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {distributorMe?.user.name}
        </Title2>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/distributor">Dashboard</Link>
        <Link href="/distributor/warehouses">Manage Warehouses</Link>
        {distributorMe?.warehouses.map((warehouse) => (
          <Link
            href={`/distributor/warehouses/${warehouse.id}`}
            className="pl-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function DistributorSidebar({ distributorMe }: DistributorMeQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <DistributorMenu distributorMe={distributorMe} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
