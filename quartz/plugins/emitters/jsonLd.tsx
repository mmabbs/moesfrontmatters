import { QuartzEmitterPlugin } from "../types"
import { QuartzPluginData } from "../vfile"
import { FullSlug, joinSegments, simplifySlug } from "../../util/path"

// Writes schema.org structured data (JSON-LD) into each page's <head>.
// Search engines read it as labeled facts about the page and its author.
// Registered as a built-in emitter in quartz/plugins/loader/config-loader.ts.

export interface JsonLdOptions {
  /** Author name for Person schema */
  authorName: string
  /** Author job title */
  authorJobTitle?: string
  /** Social profile URLs */
  sameAs?: string[]
}

const defaultOptions: JsonLdOptions = {
  authorName: "Moe Abbas",
  // authorJobTitle omitted — add when positioning is settled
  sameAs: ["https://www.linkedin.com/in/moe-m-abbas/", "https://github.com/mmabbs"],
}

type Author = { "@type": "Person"; name: string }

function pageUrl(baseUrl: string, slug: string): string {
  // Same form as the canonical link and sitemap: "index" -> "/", "a/index" -> "a/"
  return joinSegments(`https://${baseUrl}/`, simplifySlug(slug as FullSlug))
}

function isoDate(date: unknown): string | undefined {
  return date instanceof Date && !isNaN(date.getTime()) ? date.toISOString() : undefined
}

function pageText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value.trim() : undefined
}

function personSchema(baseUrl: string, opts: JsonLdOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.authorName,
    jobTitle: opts.authorJobTitle,
    url: `https://${baseUrl}/`,
    sameAs: opts.sameAs,
  }
}

function webSiteSchema(baseUrl: string, siteTitle: string, author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: `https://${baseUrl}/`,
    author,
  }
}

/** Case studies and game writing specs. */
function creativeWorkSchema(baseUrl: string, pageData: QuartzPluginData, author: Author) {
  const fm = pageData.frontmatter
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: pageText(fm?.title),
    description: pageText(fm?.description),
    author,
    dateCreated: isoDate(pageData.dates?.created),
    dateModified: isoDate(pageData.dates?.modified),
    url: pageUrl(baseUrl, pageData.slug ?? ""),
  }
}

/** Notes, essays, run logs and appendices. */
function articleSchema(baseUrl: string, pageData: QuartzPluginData, author: Author) {
  const fm = pageData.frontmatter
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageText(fm?.title),
    description: pageText(fm?.description),
    author,
    // dates.published falls back to build time when frontmatter has none; use created
    datePublished: isoDate(pageData.dates?.created),
    dateModified: isoDate(pageData.dates?.modified),
    url: pageUrl(baseUrl, pageData.slug ?? ""),
  }
}

export const JsonLd: QuartzEmitterPlugin<Partial<JsonLdOptions>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "JsonLd",
    async emit() {
      return []
    },
    externalResources: (ctx) => {
      const baseUrl = ctx.cfg.configuration.baseUrl ?? ""
      const siteTitle = ctx.cfg.configuration.pageTitle
      const author: Author = { "@type": "Person", name: opts.authorName }

      return {
        additionalHead: [
          (pageData: QuartzPluginData) => {
            const slug = pageData.slug ?? ""
            const isFolderIndex = slug === "index" || slug.endsWith("/index")
            const schemas: object[] = []

            if (slug === "index") {
              schemas.push(personSchema(baseUrl, opts))
              schemas.push(webSiteSchema(baseUrl, siteTitle, author))
            } else if (!isFolderIndex && slug.startsWith("projects/")) {
              schemas.push(creativeWorkSchema(baseUrl, pageData, author))
            } else if (
              !isFolderIndex &&
              (slug.startsWith("digital-garden/") || slug.startsWith("companion-pages/"))
            ) {
              schemas.push(articleSchema(baseUrl, pageData, author))
            }

            if (schemas.length === 0) return <></>

            return (
              <>
                {schemas.map((schema) => (
                  <script
                    type="application/ld+json"
                    // JSON.stringify drops undefined fields. Escape "<" so page
                    // text can never close the script tag early.
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
                    }}
                  />
                ))}
              </>
            )
          },
        ],
      }
    },
  }
}
