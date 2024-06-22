import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import AppProviders from "./AppProviders";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!"
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
