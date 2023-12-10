'use server'

import {
  CreateRetailerDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'

export async function createRetailer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateRetailerDocument,
      variables: {
        createRetailerInput: {
          uid,
        },
      },
    })

    console.log(data, error)

    revalidateTag(namedOperations.Query.retailerMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
