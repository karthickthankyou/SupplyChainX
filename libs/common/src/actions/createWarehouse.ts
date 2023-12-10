'use server'

import { formSchemaCreateWarehouse } from '@foundation/forms/src/schemas'
import {
  CreateWarehouseDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { redirect } from 'next/navigation'
import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'

type FormTypeCreateWarehouse = z.infer<typeof formSchemaCreateWarehouse>

export async function createWarehouse(formData: FormTypeCreateWarehouse) {
  const result = formSchemaCreateWarehouse.safeParse(formData)
  const user = await getAuth()

  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }
  if (result.success) {
    const { name, address, description } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: CreateWarehouseDocument,
      variables: {
        createWarehouseInput: {
          address,
          name,
          description,
          manufacturerId: user.user.uid,
        },
      },
    })

    if (data?.createWarehouse) {
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
