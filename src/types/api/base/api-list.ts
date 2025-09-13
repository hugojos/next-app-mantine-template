import type { ApiItem } from "./api-item";

export interface ApiList<T = ApiItem> {
  data: T[];
}
