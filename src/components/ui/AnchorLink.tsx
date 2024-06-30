"use client";
import { Anchor, AnchorProps } from "@mantine/core";
import Link, { LinkProps } from "next/link";

interface AnchorLinkProps extends AnchorProps, LinkProps {
  children: React.ReactNode;
}

const AnchorLink = (props: AnchorLinkProps) => (
  <Anchor underline="never" component={Link} {...props} />
);

export default AnchorLink;
