import { Metadata } from "next";

interface BuildMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
}

export const webTitle = "Plantillas de Memes";

// TODO: hacer la url canonical como un parametro
export const generatePageMetadata = ({
  title,
  description,
  keywords,
  url,
}: BuildMetadataParams): Metadata => {
  return {
    title,
    // authors: [
    //   {
    //     name: post.author || "Minh Vu",
    //   },
    // ],
    description: description,
    keywords: [...(keywords ?? []), "meme", "plantillas", "memes"],
    openGraph: {
      title: `${title} | ${webTitle}`,
      description: description,
      type: "article",
      url,
      // publishedTime: post.created_at,
      // modifiedTime: post.modified_at,
      // authors: ["https://dminhvu.com/about"],
      // tags: post.categories,
      // images: [
      //   {
      //     url: `https://ik.imagekit.io/dminhvu/assets/${post.slug}/thumbnail.png?tr=f-png`,
      //     width: 1024,
      //     height: 576,
      //     alt: post.title,
      //     type: "image/png",
      //   },
      // ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   site: "@dminhvu02",
    //   creator: "@dminhvu02",
    //   title: `${post.title} | dminhvu`,
    //   description: post.description,
    //   images: [
    //     {
    //       url: `https://ik.imagekit.io/dminhvu/assets/${post.slug}/thumbnail.png?tr=f-png`,
    //       width: 1024,
    //       height: 576,
    //       alt: post.title,
    //     },
    //   ],
    // },
    // alternates: {
    //   canonical: `https://dminhvu.com/${post.slug}`,
    // },
  };
};
