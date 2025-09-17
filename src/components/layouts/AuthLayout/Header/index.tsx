import { AppShellHeader, Flex, Group } from "@mantine/core";
import Link from "next/link";
import routes from "src/config/routes";

const Header = () => {
  return (
    <AppShellHeader px={8}>
      <Flex align="center" justify="space-between" className="h-full">
        <Group align="center" gap={12}>
          <Link
            href={routes.home()}
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
