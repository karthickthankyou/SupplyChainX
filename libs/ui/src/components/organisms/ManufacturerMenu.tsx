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
        <Link href="/manufacturer/products">Manage Products</Link>
        {manufacturerMe?.products.map((product) => (
          <Link
            href={`/manufacturer/products/${product.id}`}
            className="translate-x-4"
          >
            {product.name}
          </Link>
        ))}
        <Link href="/manufacturer/warehouses">Manage Warehouses</Link>
        {manufacturerMe?.warehouses.map((warehouse) => (
          <Link
            href={`/manufacturer/warehouses/${warehouse.id}`}
            className="translate-x-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
