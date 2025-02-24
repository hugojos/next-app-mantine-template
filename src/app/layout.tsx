import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import "@mantine/dates/styles.css";
import { Metadata, Viewport } from "next";
import "src/styles/global.css";
import isProdEnv from "src/utils/isProdEnv";
import {
  defaultDescription,
  defaultTitle
} from "src/utils/seo/generatePageMetadata";
import AppProviders from "./AppProviders";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  robots: isProdEnv
    ? {
        index: true,
        follow: true,
        googleBot: "index, follow"
      }
    : {
        index: false,
        follow: false,
        googleBot: "noindex, nofollow"
      }
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="es" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
