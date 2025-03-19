import { InfiniteData } from "@tanstack/react-query";
import ApiPaginationRes from "src/types/api/ApiPaginationRes";

export const isInfinityEmpty = (
  data: InfiniteData<ApiPaginationRes<unknown>> | undefined
) => data?.pages[0].data.length === 0;
