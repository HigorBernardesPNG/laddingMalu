import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ladding-malu-project.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    // adicione outras rotas se existirem, ex: { url: `${base}/contato`, ... }
  ];
}
