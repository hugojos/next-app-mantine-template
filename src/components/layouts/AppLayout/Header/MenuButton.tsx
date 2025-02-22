"use client";
import { ActionIcon } from "@mantine/core";
import useAppContainerStore from "../useAppContainerStore";

interface MenuButtonProps {}

const MenuButton = ({}: MenuButtonProps) => {
  const { openNavbar, toggleNavbar } = useAppContainerStore();

  return (
    <ActionIcon
      variant="default"
      size={"input-md"}
      hiddenFrom="md"
      onClick={() => toggleNavbar()}
      aria-label={openNavbar ? "Abrir menú" : "Cerrar menú"}
    >
      {/* <Icon i={openNavbar ? IconX : IconMenu2} size={"lg"} /> */}
    </ActionIcon>
  );
};

export default MenuButton;
