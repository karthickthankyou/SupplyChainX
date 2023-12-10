'use server'

import { formSchemaTransferInventory } from '@foundation/forms/src/schemas'
import {
  TransferInventoryDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'

type FormTypeUpsertInventory = z.infer<typeof formSchemaTransferInventory>

export async function transferInventory({
  formData,
}: {
  formData: FormTypeUpsertInventory
}) {
  const result = formSchemaTransferInventory.safeParse(formData)
  const user = await getAuth()

  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }
  if (result.success) {
    const { productId, quantity, fromWarehouseId, toWarehouseId } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: TransferInventoryDocument,
      variables: {
        fromWarehouseId,
        productId,
        quantity,
        toWarehouseId,
      },
    })

    if (data?.transferInventory) {
      revalidateTag(namedOperations.Query.myWarehouses)
    }
    if (error) {
      throw new Error('Something went wrong.')
    }
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
