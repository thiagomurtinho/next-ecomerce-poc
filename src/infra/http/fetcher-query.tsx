import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

/**
 * A generic query hook that accepts a fetcher function and query options.
 * @param queryKey A unique key for the query cache, which can be a string or an array.
 * @param fetcher A function that returns the data promise. This is the query function itself.
 * @param options Additional options for react-query useQuery.
 */
export function useFetcherQuery<TQueryFnData, TError = unknown, TData = TQueryFnData>(
  queryKey: QueryKey,
  fetcher: QueryFunction<TQueryFnData>,
  options?: UseQueryOptions<TQueryFnData, TError, TData>,
): UseQueryResult<TData, TError> {
  return useQuery<TQueryFnData, TError, TData>(queryKey, fetcher, options);
}
