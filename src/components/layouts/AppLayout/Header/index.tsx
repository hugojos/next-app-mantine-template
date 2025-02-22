import { AppShellHeader, Flex, Group } from "@mantine/core";
import Link from "next/link";
import getHref from "src/config/getHref";
import MenuButton from "./MenuButton";

const Header = async () => {
  return (
    <AppShellHeader px={8}>
      <Flex align="center" justify="space-between" className="h-full">
        <Group align="center" gap={12}>
          <MenuButton />
          <Link
            href={getHref.home()}
            prefetch={false}
            aria-label="Ir a la home"
          >
            LOGO
          </Link>
        </Group>
      </Flex>
    </AppShellHeader>
  );
};

export default Header;
