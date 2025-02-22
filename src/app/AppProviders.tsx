"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { ModalManagerProvider } from "src/contexts/ModalManagerContext";
import theme from "src/theme";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

const MyNotifications = dynamic(
  () => import("src/components/ui/MyNotifications"),
  { ssr: false }
);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ModalManagerProvider>
        <MyNotifications />
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </ModalManagerProvider>
    </MantineProvider>
  );
};

export default AppProviders;
