import LoginView from "src/components/views/auth/Login";
import { PageDataProvider } from "src/contexts/PageDataContext";
import PageProps from "src/types/PageProps";

const Page = ({}: PageProps) => {
  return (
    <PageDataProvider value={{} satisfies ExamplePageData}>
      <LoginView />
    </PageDataProvider>
  );
};

// rename
export interface ExamplePageData {}

export default Page;
