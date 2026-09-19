import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";
import type { Project } from "@/lib/types";

const siteUrl = "https://romain-audebert.netlify.app";

const staticRoutes = [
  "",
  "/a-propos",
  "/competences",
  "/projets",
  "/stages",
  "/certifications",
  "/veille",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = (projects as Project[]).map(
    (project) => ({
      url: `${siteUrl}/projets/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticEntries, ...projectEntries];
}
