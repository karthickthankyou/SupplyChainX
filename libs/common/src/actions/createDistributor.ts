'use server'

import {
  CreateDistributorDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLServer } from '../fetch/server'

export async function createDistributer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQLServer({
      document: CreateDistributorDocument,
      variables: {
        createDistributorInput: {
          uid,
        },
      },
    })

    console.log(data, error)

    revalidateTag(namedOperations.Query.distributorMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
