import { MetadataRoute } from "next";
import envs from "src/config/envs";
import isProdEnv from "src/utils/isProdEnv";

export default function robots(): MetadataRoute.Robots {
  if (isProdEnv)
    return {
      rules: {
        userAgent: "*",
        allow: ["/"]
      },
      sitemap: [`${envs.baseUrl}/sitemap.xml`]
    };

  return {
    rules: {
      userAgent: "*",
      disallow: ["/"]
    }
  };
}
