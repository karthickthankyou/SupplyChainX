'use client'
import { useState } from 'react'
import { SimpleDialog } from './SimpleDialog'
import { useFormSellInventory } from '@foundation/forms/src/sellInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import { sellInventory } from '@foundation/common/src/actions/sellInventory'
import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { Button } from '../atoms/button'

export const SellGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: MyWarehousesQuery['myWarehouses'][0]['inventories'][0]
}) => {
  const { register, handleSubmit, reset } = useFormSellInventory()
  const [close, setClose] = useState(false)

  const [loading, setLoading] = useState(false)
  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className="text-left hover:underline underline-offset-4">Sell</div>
      }
    >
      <div>{inventory.product.name}</div>
      <div>{inventory.quantity}</div>
      <form
        onSubmit={handleSubmit(async ({ productId, quantity, warehouseId }) => {
          setLoading(true)
          await sellInventory({
            formData: {
              warehouseId,
              quantity,
              productId,
            },
          })
          setLoading(false)
          setClose(true)
          reset()
        })}
      >
        <Label title="Quantity">
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Label title="Warehouse ID (readonly)">
          <Input
            {...register('warehouseId', { valueAsNumber: true })}
            readOnly
            value={warehouseId}
          />
        </Label>
        <Label title="Product ID (readonly)">
          <Input
            {...register('productId', { valueAsNumber: true })}
            readOnly
            value={inventory.product.id}
          />
        </Label>
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </SimpleDialog>
  )
}
