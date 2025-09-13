"use client";

import { createContext, useContext } from "react";
import { ApiData } from "./requestByApiData";

const apiData = createContext<ApiData | undefined>(undefined);

interface ApiDataProviderProps {
  children: React.ReactNode;
  value: ApiData;
}

export const ApiDataProvider = ({ value, children }: ApiDataProviderProps) => (
  <apiData.Provider value={value}>{children}</apiData.Provider>
);

export const useApiData = <T extends keyof ApiData>(apiDataKey: T) => {
  const ctx = useContext(apiData);
  const data = ctx?.[apiDataKey];
  if (data === undefined) throw new Error(`ApiData not found: ${apiDataKey}`);
  return data;
};
