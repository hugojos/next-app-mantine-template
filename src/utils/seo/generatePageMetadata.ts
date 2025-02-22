import { Metadata } from "next";
import envs from "src/config/envs";
import isProdEnv from "../isProdEnv";

interface BuildMetadataParams {
  title?: string;
  description?: string;
  keywords: string[];
  url: string;
}

export const defaultTitle = "Next";

export const defaultDescription = "default description";

export const siteName = "Next";

export const defaultImageUrl = `${envs.baseUrl}/assets/share.jpg`;

export const generatePageMetadata = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords,
  url
}: BuildMetadataParams): Metadata => {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(envs.baseUrl),
    openGraph: {
      siteName,
      type: "website",
      locale: "es",
      images: {
        alt: siteName,
        url: defaultImageUrl
      },
      url,
      title
    },
    robots: isProdEnv
      ? {
          index: true,
          follow: true,
          googleBot: "index, follow"
        }
      : {
          index: false,
          follow: false,
          googleBot: "noindex, nofollow"
        },
    applicationName: siteName,
    appleWebApp: {
      title,
      statusBarStyle: "default",
      capable: true
    },
    twitter: {
      card: "summary",
      site: url,
      description,
      images: {
        url: defaultImageUrl,
        alt: siteName
      },
      title
    },
    alternates: {
      canonical: url
    }
  };
};
