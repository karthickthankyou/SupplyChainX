'use server'

import { formSchemaSellInventory } from '@foundation/forms/src/schemas'
import {
  ReduceInventoryDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'

type FormTypeUpsertInventory = z.infer<typeof formSchemaSellInventory>

export async function sellInventory({
  formData,
}: {
  formData: FormTypeUpsertInventory
}) {
  const result = formSchemaSellInventory.safeParse(formData)
  const user = await getAuth()

  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }
  if (result.success) {
    const { productId, quantity, warehouseId } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: ReduceInventoryDocument,
      variables: {
        warehouseId,
        productId,
        quantity,
      },
    })

    if (data?.reduceInventory) {
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
