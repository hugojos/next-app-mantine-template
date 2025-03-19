import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
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

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="es" {...mantineHtmlProps} className={raleway.className}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="text-gray-9">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
