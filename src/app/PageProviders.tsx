import { PageDataProvider } from "lkd-web-kit";
import { ApiDataProvider } from "src/contexts/ApiDataContext";
import type { ApiData } from "src/contexts/ApiDataContext/requestByApiData";
import { ModalManagerProvider } from "src/contexts/ModalManagerContext";
import type { ModalKeys } from "src/contexts/ModalManagerContext/types";

interface PageProvidersProps {
  pageData?: unknown;
  loadApiData?: (keyof ApiData)[];
  preloadModals?: (ModalKeys | (string & {}))[];
  children: React.ReactNode;
}

const PageProviders = async ({
  children,
  pageData,
  preloadModals = [],
  loadApiData = [],
}: PageProvidersProps) => {
  // const apiDataResult = await Promise.all(
  //   loadApiData.map((key) => requestByApiDataKey[key]()),
  // );

  return (
    <PageDataProvider value={pageData}>
      <ApiDataProvider
        value={[]}
      // value={loadApiData.reduce(
      //   (acc, key, i) => ({ ...acc, [key]: apiDataResult[i] }),
      //   {} as ApiData,
      // )}
      >
        <ModalManagerProvider loadModals={preloadModals}>
          {children}
        </ModalManagerProvider>
      </ApiDataProvider>
    </PageDataProvider>
  );
};

export default PageProviders;
