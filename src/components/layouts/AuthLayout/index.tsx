import { AppShell, AppShellMain } from "@mantine/core";
import Header from "./Header";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 54 }} padding={8}>
      <Header />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
