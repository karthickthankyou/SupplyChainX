import { MyTransactionsQuery } from '@foundation/network/src/generated'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Button } from '../components/atoms/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/atoms/dropdownMenu'

export type Transaction = MyTransactionsQuery['myTransactions'][0]
const columnHelper =
  createColumnHelper<MyTransactionsQuery['myTransactions'][0]>()

export const transactionsColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => <div className="capitalize">{info.getValue()}</div>,
  }),
  columnHelper.accessor('product.name', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="lowercase">{row.original.product.name}</div>
    },
  }),
  columnHelper.accessor('quantity', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Quantity
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="capitalize">{row.original.quantity}</div>
    },
  }),
  columnHelper.accessor('fromWarehouse.name', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          From
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="capitalize">{row.original.fromWarehouse?.name}</div>
      )
    },
  }),
  columnHelper.accessor('toWarehouse.name', {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          To
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="capitalize">{row.original.toWarehouse?.name}</div>
    },
  }),

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(transaction.id.toString())
              }
            >
              Copy transaction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View transaction details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
] as ColumnDef<Transaction>[]
