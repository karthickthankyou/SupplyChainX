import { ManufacturerMeQuery } from '@foundation/network/src/generated'
import Image from 'next/image'
import { Link } from '../molecules/CustomLink'
import { Title2 } from '../atoms/typography'
import { Separator } from '../atoms/separator'

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
        <Link href="/employer">Dashboard</Link>
        <Link href="/employer/searchEmployees">Search employees</Link>
        <Link href="/employer/employees">Employees</Link>
        <Separator />
        <Separator />
        <Link href="/employer/jobs">Jobs</Link>
        <Link href="/employer/applications">Applications</Link>
        <Link href="/employer/employers">Manage employers</Link>
        <Link href="/employer/payments">Payments</Link>
        <Link href="/employer/following">Following</Link>
      </div>
    </div>
  )
}
