import { ManufacturerMeQuery } from '@foundation/network/src/generated'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Title2 } from '../atoms/typography'

export const ManufacturerMenu = ({ manufacturerMe }: ManufacturerMeQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <Image
        src={manufacturerMe?.user.image || ''}
        alt=""
        width={300}
        height={300}
      />
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {manufacturerMe?.user.name}
        </Title2>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/manufacturer">Dashboard</Link>
        <Link href="/manufacturer/warehouses">Manage Warehouses</Link>
        <Link href="/manufacturer/products">Manage Products</Link>
      </div>
    </div>
  )
}
