import { useCallback, useState } from 'react'
import { FetchResult, GraphqlRequestOptions, fetchGraphQL } from '.'

export async function fetchGraphQLClient<TData, V>({
  document,
  variables,
  apiSecret,
  config,
}: Omit<GraphqlRequestOptions<TData, V>, 'token'>): Promise<
  FetchResult<TData>
> {
  const token = await fetch('/api/auth/token').then((res) => res.json())
  return fetchGraphQL({ document, apiSecret, config, variables, token })
}

export interface UseFetchResult<T> {
  data?: T
  error?: string
  loading?: boolean
}

export function useFetch<TData, TVariables = undefined>(
  options: GraphqlRequestOptions<TData, TVariables>,
): [
  (options?: GraphqlRequestOptions<TData, TVariables>) => Promise<void>,
  UseFetchResult<TData>,
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
