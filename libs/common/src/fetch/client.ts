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
