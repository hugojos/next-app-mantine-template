"use client";

import { createContext, useContext } from "react";
import { ApiList } from "src/types/api/ApiList";

const ApiData = createContext<ApiData | undefined>(undefined);

interface ApiDataProviderProps {
  children: React.ReactNode;
  apiData: ApiData;
}

export const ApiDataProvider = ({
  apiData,
  children
}: ApiDataProviderProps) => (
  <ApiData.Provider value={apiData}>{children}</ApiData.Provider>
);

export const useApiData = <T extends keyof ApiData>(apiDataKey: T) => {
  const { apiData } = useContext(ApiData) as { apiData: ApiData };
  const data = apiData[apiDataKey] as ApiData[T];
  if (data === undefined) throw new Error(`ApiData not found: ${apiDataKey}`);
  return data;
};

export const requestByApiDataKey: Record<keyof ApiData, () => unknown> = {
  amenities: () => undefined
};

export interface ApiData {
  amenities?: ApiList<any>;
}
