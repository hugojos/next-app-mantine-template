"use client";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "dayjs/locale/es";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import { ModalManagerProvider } from "src/contexts/ModalManagerContext";
import theme from "src/theme";
import { z, ZodErrorMap } from "zod";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } }
});

const MyNotifications = dynamic(
  () => import("src/components/ui/MyNotifications"),
  { ssr: false }
);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const myErrorMap: ZodErrorMap = (error, ctx) => {
      /*
      This is where you override the various error codes
      */

      switch (error.code) {
        case z.ZodIssueCode.too_small:
          if (error.minimum === 1) {
            return { message: `Campo requerido` };
          }
          return { message: `Minimo ${error.minimum} caracteres` };
        case z.ZodIssueCode.too_big:
          return { message: `Maximo ${error.maximum} caracteres` };
        case z.ZodIssueCode.invalid_string:
          if (error.validation === "email") {
            return { message: "Email invalido" };
          }
          break;
      }

      // fall back to default message!
      return { message: ctx.defaultError };
    };

    z.setErrorMap(myErrorMap);
  }, []);
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
