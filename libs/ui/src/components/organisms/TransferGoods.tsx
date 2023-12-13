'use client'
import { useState } from 'react'
import { SimpleDialog } from './SimpleDialog'
import { useFormTransferInventory } from '@foundation/forms/src/transferInventory'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import { transferInventory } from '@foundation/common/src/actions/transferInventory'
import { MyWarehousesQuery } from '@foundation/network/src/generated'
import { Button } from '../atoms/button'

export const TransferGoods = ({
  warehouseId,
  inventory,
}: {
  warehouseId: number
  inventory: MyWarehousesQuery['myWarehouses'][0]['inventories'][0]
}) => {
  const { register, handleSubmit, reset } = useFormTransferInventory()
  const [close, setClose] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <SimpleDialog
      close={close}
      buttonText={
        <div className=" hover:underline underline-offset-4">Transfer</div>
      }
    >
      <div>{inventory.product.name}</div>
      <div>{inventory.quantity}</div>
      <form
        onSubmit={handleSubmit(
          async ({ productId, quantity, fromWarehouseId, toWarehouseId }) => {
            setLoading(true)

            await transferInventory({
              formData: {
                fromWarehouseId,
                toWarehouseId,
                quantity,
                productId,
              },
            })
            setLoading(false)

            setClose(true)
            reset()
          },
        )}
      >
        <Label title="Quantity">
          <Input {...register('quantity', { valueAsNumber: true })} />
        </Label>
        <Label title="Warehouse ID (readonly)">
          <Input
            {...register('fromWarehouseId', { valueAsNumber: true })}
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
        <Label title="Target Warehouse ID">
          <Input {...register('toWarehouseId', { valueAsNumber: true })} />
        </Label>
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </SimpleDialog>
  )
}
