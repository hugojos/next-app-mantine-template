import { NavLink, Stack } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

interface NavItemsProps {
  items: {
    label: string;
    href?: string;
    leftSection?: React.ReactNode;
    onClick?: (e: MouseEvent<Element>) => void;
    disabled?: boolean;
    isActive?: boolean;
    className?: string;
  }[];
}

const NavItems = ({ items }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <Stack gap={0}>
      {items.map((item) => {
        const props = {
          label: item.label,
          leftSection: item.leftSection,
          onClick: item.onClick,
          disabled: item.disabled,
          className: item.className,
        };

        if (item.href) {
          const isActive = item.isActive ?? pathname === item.href;
          return (
            <NavLink
              active={isActive}
              key={item.label}
              component={Link}
              prefetch={false}
              href={item.href}
              {...props}
            />
          );
        }

        return (
          <NavLink
            key={item.label}
            active={item.isActive}
            component="button"
            {...props}
          />
        );
      })}
    </Stack>
  );
};

export default NavItems;
