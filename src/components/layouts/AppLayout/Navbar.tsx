"use client";
import { AppShellNavbar } from "@mantine/core";

import { usePathname, useRouter } from "next/navigation";
import { useModalManager } from "src/contexts/ModalManagerContext";
import useAppContainerStore from "./useAppContainerStore";
import { NavItems } from "lkd-web-kit";
import routes from "src/config/routes";

const Navbar = () => {
  const { showModal } = useModalManager();
  const { toggleNavbar } = useAppContainerStore();
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    toggleNavbar();
  };

  return (
    <AppShellNavbar
      p={8}
      className="flex flex-col justify-between overflow-auto text-center"
    >
      <div>
        <NavItems
          items={[
            {
              label: "Home",
              href: routes.home(),
              // leftSection: <IconFlame />,
              onClick
            }
          ]}
        />
      </div>
    </AppShellNavbar>
  );
};

export default Navbar;
