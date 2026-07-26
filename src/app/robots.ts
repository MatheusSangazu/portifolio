import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  const site = profile.siteUrl;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/game"],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
