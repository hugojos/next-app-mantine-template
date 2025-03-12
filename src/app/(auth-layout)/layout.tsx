import AuthLayout from "src/components/layouts/AuthLayout";
import { LayoutProps } from "src/types/PageProps";

const Layout = ({ children }: LayoutProps) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
