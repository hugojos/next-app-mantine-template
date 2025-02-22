import { Metadata } from "next";
import envs from "src/config/envs";
import getHref from "src/config/getHref";
import PageProps from "src/types/PageProps";
import { generatePageMetadata } from "src/utils/seo/generatePageMetadata";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const searchParams = await props.searchParams;
  return generatePageMetadata({
    title: "Home",
    description: "descripcion",
    keywords: [],
    url: `${envs.baseUrl}${getHref.home()}`
  });
}
function Page() {
  return <div>hola</div>;
}

export default Page;
