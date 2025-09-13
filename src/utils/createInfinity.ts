import { queryStringify } from "lkd-web-kit";
import {
  type CreateInfiniteQueryOptions,
  createInfiniteQuery,
} from "react-query-kit";
import { fetchApi } from "src/config/fetchApi";
import type { ApiPagination } from "src/types/api/base/api-pagination";

export interface PaginationQueryParams {
  // pageIndex: number;
  pageSize?: number;
}

export const getNextPageParam = (
  lastPage: ApiPagination<any>,
  allPages: ApiPagination<any>[],
  lastPageParam: number,
) => {
  if (lastPage.pageData)
    return lastPage.pageData.currentPage.hasNext
      ? lastPageParam + 1
      : undefined;

  return lastPage.data.length === 0 ? undefined : lastPageParam + 1;
};

const createInfinity = <TFnData = unknown, TVariables = void, TError = Error>({
  fetchUrl,
  buildParams,
  ...options
}: Partial<
  CreateInfiniteQueryOptions<
    ApiPagination<TFnData>,
    TVariables & PaginationQueryParams,
    TError
  >
> & {
  fetchUrl: string;
  buildParams?: (variables: TVariables & PaginationQueryParams) => {
    query: Record<string, string | number | undefined>;
    body: Record<string, any>;
  };
}) => {
  return createInfiniteQuery<
    ApiPagination<TFnData>,
    TVariables & PaginationQueryParams,
    TError
  >({
    queryKey: [fetchUrl],
    initialPageParam: 0,
    getNextPageParam,
    fetcher: (variables, { pageParam }) => {
      const defaultVariables = {
        pageSize: 10,
        ...variables,
      };
      const params = buildParams?.(defaultVariables);
      const query = params?.query ?? defaultVariables;
      const body = params?.body;

      const queryString = queryStringify({
        ...query,
        pageIndex: pageParam ?? 0,
      });

      return fetchApi
        .post(`${fetchUrl}${queryString}`, {
          json: body,
        })
        .json();
    },
    ...options,
  });
};

export default createInfinity;
