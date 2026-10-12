import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl("/opengraph-image"),
        absoluteUrl("/images/logo/logo-full.png"),
        absoluteUrl("/images/hero/hand-network.jpg"),
        absoluteUrl("/images/about/recruitment-conversation.jpg"),
        absoluteUrl("/images/why-us/team-at-work.jpg"),
      ],
    },
  ];
}
