import { AppShellMain } from "@mantine/core";
import Aside from "./Aside";
import AppContainer from "./Container";
import Header from "./Header";
import Navbar from "./Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppContainer>
      <Header />
      <Navbar />
      <AppShellMain>{children}</AppShellMain>
      <Aside />
    </AppContainer>
  );
}
