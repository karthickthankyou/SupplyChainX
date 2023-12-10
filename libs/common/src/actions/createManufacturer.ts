'use server'

import {
  CreateManufacturerDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'

export async function createManufacturer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateManufacturerDocument,
      variables: {
        createManufacturerInput: {
          uid,
        },
      },
    })

    console.log(data, error)

    revalidateTag(namedOperations.Query.manufacturerMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
