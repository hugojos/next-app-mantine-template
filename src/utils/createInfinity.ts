import queryString from "query-string";
import {
  CreateInfiniteQueryOptions,
  createInfiniteQuery
} from "react-query-kit";
import fetchApi from "src/config/fetchApi";
import ApiPaginationRes from "src/types/api/ApiPaginationRes";

export interface PaginationQueryParams {
  // pageIndex: number;
  pageSize?: number;
}

const createInfinity = <TFnData = unknown, TVariables = void, TError = Error>({
  fetchUrl,
  ...options
}: Partial<
  CreateInfiniteQueryOptions<
    ApiPaginationRes<TFnData>,
    TVariables & PaginationQueryParams,
    TError
  >
> & { fetchUrl: string }) => {
  return createInfiniteQuery<
    ApiPaginationRes<TFnData>,
    TVariables & PaginationQueryParams,
    TError
  >({
    queryKey: [fetchUrl],
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.pageData.currentPage.hasNext ? lastPageParam + 1 : undefined,
    fetcher: (variables, { pageParam }) =>
      fetchApi
        .post(
          `${fetchUrl}?${queryString.stringify({
            pageSize: 10,
            ...variables,
            pageIndex: pageParam
          })}`
        )
        .json(),
    ...options
  });
};

export default createInfinity;
