import type { MetadataRoute } from "next";
import envs from "src/config/envs";
import routes from "src/config/routes";
import isProdEnv from "src/utils/isProdEnv";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isProdEnv) return [];

  const sitemapPages = [buildSitemap(routes.home(), new Date(), "hourly", 0.9)];

  return sitemapPages.concat(sitemapPages);
}

type Sitemap = MetadataRoute.Sitemap[number];

const buildSitemap = (
  url: Sitemap["url"],
  lastModified?: Sitemap["lastModified"],
  changeFrequency?: Sitemap["changeFrequency"],
  priority?: Sitemap["priority"],
) => ({
  url: `${envs.baseUrl}${url}`,
  lastModified,
  changeFrequency,
  priority,
});
