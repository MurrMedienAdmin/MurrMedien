import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://murrmedien.de",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://murrmedien.de/projekte",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://murrmedien.de/ueber-uns",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://murrmedien.de/kontakt",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
