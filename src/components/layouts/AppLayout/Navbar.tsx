"use client";
import { AppShellNavbar } from "@mantine/core";

import { usePathname, useRouter } from "next/navigation";
import getHref from "src/config/getHref";
import { useModalManager } from "src/contexts/ModalManagerContext";
import NavItems from "../components/NavItems";
import useAppContainerStore from "./useAppContainerStore";

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
              href: getHref.home(),
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
