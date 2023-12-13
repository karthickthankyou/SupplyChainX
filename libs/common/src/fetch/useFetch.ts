import { useState, useCallback } from 'react'
import { fetchGraphQLClient } from './client'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { GraphqlRequestOptions } from '.'

export interface FetchResult<T> {
  data?: T
  error?: string
  loading?: boolean
}

export function useGraphQLClient<TData, TVariables = undefined>(
  options: GraphqlRequestOptions<TData, TVariables>,
): [
  (options?: GraphqlRequestOptions<TData, TVariables>) => Promise<void>,
  FetchResult<TData>,
] {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [data, setData] = useState<TData | undefined>(undefined)

  const fetchData = useCallback(
    async (fetchOptions?: GraphqlRequestOptions<TData, TVariables>) => {
      setLoading(true)
      try {
        const response = await fetchGraphQLClient<TData, TVariables>(
          fetchOptions || options,
        )
        setData(response.data)
        setError(undefined)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setData(undefined)
      } finally {
        setLoading(false)
      }
    },
    [options],
  )

  return [fetchData, { loading, data, error }]
}
