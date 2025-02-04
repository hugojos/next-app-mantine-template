"use client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "src/theme";

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
      <Notifications position="top-center" />
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </MantineProvider>
  );
};

export default AppProviders;
