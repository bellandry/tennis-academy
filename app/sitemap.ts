import type { MetadataRoute } from "next";
import { programmes } from "@/constants";
import { publicRoutes, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = publicRoutes.map((pathname) => ({
    url: `${SITE_URL}${pathname}`,
    lastModified: now,
    changeFrequency: pathname === "/" ? "weekly" as const : "monthly" as const,
    priority: pathname === "/" ? 1 : pathname.startsWith("/programs/") ? 0.8 : 0.6,
  }));

  const programRoutes = programmes.map((program) => ({
    url: `${SITE_URL}/programs/${program.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...programRoutes];
}
