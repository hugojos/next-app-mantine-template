import {
  ApiData,
  ApiDataProvider,
  requestByApiDataKey
} from "src/contexts/ApiDataContext";
import { PageDataProvider } from "src/contexts/PageDataContext";

interface PageProvidersProps {
  pageData?: unknown;
  apiData?: (keyof ApiData)[];
  children: React.ReactNode;
}

const PageProviders = async ({
  children,
  pageData,
  apiData = []
}: PageProvidersProps) => {
  const apiDataResult = await Promise.all(
    apiData.map((key) => requestByApiDataKey[key]())
  );

  return (
    <PageDataProvider value={pageData}>
      <ApiDataProvider
        apiData={apiData.reduce(
          (acc, key, i) => ({ ...acc, [key]: apiDataResult[i] }),
          {}
        )}
      >
        {children}
      </ApiDataProvider>
    </PageDataProvider>
  );
};

export default PageProviders;
