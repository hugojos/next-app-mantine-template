"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "src/theme";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </MantineProvider>
  );
};

export default AppProviders;
