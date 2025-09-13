import type { LayoutProps } from "lkd-web-kit";
import AuthLayout from "src/components/layouts/AuthLayout";

const Layout = ({ children }: LayoutProps) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
