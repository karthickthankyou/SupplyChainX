'use server'

import { formSchemaCreateProduct } from '@foundation/forms/src/schemas'
import {
  CreateProductDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { redirect } from 'next/navigation'
import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'

type FormTypeCreateProduct = z.infer<typeof formSchemaCreateProduct>

export async function createProduct(formData: FormTypeCreateProduct) {
  const result = formSchemaCreateProduct.safeParse(formData)
  const user = await getAuth()

  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }
  if (result.success) {
    const { name, image, description } = result.data

    const { data, error } = await fetchGraphQLServer({
      document: CreateProductDocument,
      variables: {
        createProductInput: {
          image,
          name,
          description,
          manufacturerId: user.user.uid,
        },
      },
    })

    if (data?.createProduct) {
      revalidateTag(namedOperations.Query.myProducts)
      redirect('/manufacturer/products')
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
