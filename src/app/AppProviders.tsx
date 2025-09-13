"use client";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "dayjs/locale/es";
import { useZodConfig } from "lkd-web-kit";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ModalManagerProvider } from "src/contexts/ModalManagerContext";
import theme from "src/theme";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } },
});

const MyNotifications = dynamic(
  () => import("src/components/ui/MyNotifications"),
  { ssr: false },
);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useZodConfig();
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Suspense>
        <DatesProvider settings={{ locale: "es" }}>
          <ModalManagerProvider>
            <MyNotifications />
            <QueryClientProvider client={client}>
              {children}
            </QueryClientProvider>
          </ModalManagerProvider>
        </DatesProvider>
      </Suspense>
    </MantineProvider>
  );
};

export default AppProviders;
