// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://premium-weinfinder.de"

interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

// Nur öffentliche, indexierbare Routen aus src/App.tsx.
// Ausgeschlossen: /so-funktionierts/rechner (noindex) und * (404).
const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/demo", changefreq: "monthly", priority: "0.9" },
  { path: "/so-funktionierts", changefreq: "monthly", priority: "0.8" },
  { path: "/kontakt", changefreq: "yearly", priority: "0.5" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)