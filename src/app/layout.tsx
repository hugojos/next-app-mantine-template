import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Viewport } from "next";
import AppProviders from "./AppProviders";
`
`;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!"
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
