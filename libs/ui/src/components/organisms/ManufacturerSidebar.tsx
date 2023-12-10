import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'

import { Button } from '../atoms/button'
import { ManufacturerMenu } from './ManufacturerMenu'
import { ManufacturerMeQuery } from '@foundation/network/src/generated'
import { Menu } from 'lucide-react'

export function ManufacturerSidebar({ manufacturerMe }: ManufacturerMeQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <ManufacturerMenu manufacturerMe={manufacturerMe} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
