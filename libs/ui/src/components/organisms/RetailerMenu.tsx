import { RetailerMeQuery } from '@foundation/network/src/generated'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Title2 } from '../atoms/typography'
import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'
import { Button } from '../atoms/button'
import { Menu } from 'lucide-react'

export const RetailerMenu = ({ retailerMe }: RetailerMeQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <Image
        src={retailerMe?.user.image || ''}
        alt=""
        width={300}
        height={300}
      />
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {retailerMe?.user.name}
        </Title2>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/retailer">Dashboard</Link>
        <Link href="/retailer/warehouses">Manage Warehouses</Link>
      </div>
    </div>
  )
}

export function RetailerSidebar({ retailerMe }: RetailerMeQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <RetailerMenu retailerMe={retailerMe} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
