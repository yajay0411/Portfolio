import { writeFile } from "fs/promises";
import { routes } from "../src/routes";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.local",
});

const BASE_URL = process.env.VITE_BASE_URL || "http://localhost:5173";

interface Page {
  path: string;
  priority: string;
}

const ROUTES = routes.map((route) => {
  return { path: route.path, priority: route.priority };
});

const generateSitemap = async () => {
  console.log("🚀 Generating sitemap...");
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${(ROUTES as Page[])
      .map(
        ({ path, priority }) => `
    <url>
        <loc>${BASE_URL}/${path ? path : ""}</loc>
        <priority>${priority}</priority>
    </url>`
      )
      .join("")}
</urlset>`;

  try {
    await writeFile("./public/sitemap.xml", sitemapContent);
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("❌ Error writing sitemap file:", error);
  }
};

generateSitemap();
