'use client'
import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { SimpleDialog } from './SimpleDialog'
import { useFormUpsertInventory } from '@foundation/forms/src/upsertInventory'
import { Input } from '../atoms/input'
import { Label } from '../atoms/label'
import { SelectProducts } from './SelectProducts'
import { upsertInventory } from '@foundation/common/src/actions/upsertInventory'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../atoms/button'

export const UpsertInventory = ({
  warehouse,
}: {
  warehouse: MyWarehousesQuery['myWarehouses'][0]
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormUpsertInventory()
  console.log('errors ', errors)

  const [close, setClose] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className="p-1 bg-black rounded-full shadow-md">
          <Plus className="p-1 text-white " />
        </div>
      }
    >
      {warehouse.name}
      <form
        onSubmit={handleSubmit(async ({ productId, quantity, warehouseId }) => {
          console.log('data', productId, quantity, warehouseId)
          setLoading(true)

          await upsertInventory({ productId, quantity, warehouseId })
          setLoading(false)

          setClose(true)
          reset()
        })}
      >
        <Label title="Product" error={errors.productId?.message}>
          <SelectProducts
            onSelect={function (productId: number): void {
              setValue('productId', productId)
            }}
            manufacturerId={warehouse.id}
          />
        </Label>
        <Label title="Quantity">
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Label title="Warehouse ID (readonly)">
          <Input
            {...register('warehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouse.id}
          />
        </Label>
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </SimpleDialog>
  )
}
