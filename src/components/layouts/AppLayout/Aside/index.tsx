import { AppShellAside, ScrollArea } from "@mantine/core";

const Aside = () => {
  return (
    <AppShellAside p={"sm"}>
      <ScrollArea scrollbarSize={1}></ScrollArea>
    </AppShellAside>
  );
};

export default Aside;
