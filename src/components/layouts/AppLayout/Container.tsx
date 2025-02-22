"use client";
import { AppShell } from "@mantine/core";
import useAppContainerStore from "./useAppContainerStore";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const { openNavbar } = useAppContainerStore();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 275,
        breakpoint: "lg",
        collapsed: { mobile: !openNavbar },
      }}
      aside={{ width: 275, breakpoint: "2xl", collapsed: { mobile: true } }}
      padding={8}
    >
      {children}
    </AppShell>
  );
};

export default AppContainer;
