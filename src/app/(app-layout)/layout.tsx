import type { LayoutProps } from "lkd-web-kit";
import AppLayout from "src/components/layouts/AppLayout";

const Layout = ({ children }: LayoutProps) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
