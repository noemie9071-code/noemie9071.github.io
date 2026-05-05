import { MetadataRoute } from "next";
import { recettes } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tonsite.vercel.app" },
    ...recettes.map((r) => ({
      url: `https://tonsite.vercel.app/recettes/${r.slug}`,
    })),
  ];
}
