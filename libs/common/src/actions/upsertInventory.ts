'use server'

import { formSchemaUpsertInventory } from '@foundation/forms/src/schemas'
import {
  CreateInventoryDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { redirect } from 'next/navigation'
import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'

type FormTypeUpsertInventory = z.infer<typeof formSchemaUpsertInventory>

export async function upsertInventory(formData: FormTypeUpsertInventory) {
  const result = formSchemaUpsertInventory.safeParse(formData)
  const user = await getAuth()

  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }
  if (result.success) {
    const { productId, quantity, warehouseId } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: CreateInventoryDocument,
      variables: {
        createInventoryInput: {
          productId,
          quantity,
          warehouseId,
        },
      },
    })

    if (data?.createInventory) {
      revalidateTag(namedOperations.Query.myWarehouses)
      redirect('/manufacturer/warehouses')
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
