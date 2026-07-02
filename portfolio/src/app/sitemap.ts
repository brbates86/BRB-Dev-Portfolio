import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:              "https://www.brettbatesweb.com",
      lastModified:     new Date(),
      changeFrequency:  "monthly",
      priority:         1,
    },
  ];
}
