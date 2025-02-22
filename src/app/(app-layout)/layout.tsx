import AppLayout from "src/components/layouts/AppLayout";
import { LayoutProps } from "src/types/PageProps";

const Layout = ({ children }: LayoutProps) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
