import { ElementProps } from "@mantine/core";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

interface MyLinkProps extends LinkProps, ElementProps<"a", keyof LinkProps> {}

const MyLink = ({ className, ...props }: MyLinkProps) => {
  return (
    <Link
      className={clsx("text-orange-6 hover:underline", className)}
      {...props}
    />
  );
};

export default MyLink;
