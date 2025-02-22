import { PageDataProvider } from "src/contexts/PageDataContext";

interface PageProvidersProps {
  pageData?: unknown;
  children: React.ReactNode;
}

const PageProviders = ({ children, pageData }: PageProvidersProps) => {
  return <PageDataProvider value={pageData}>{children}</PageDataProvider>;
};

export default PageProviders;
