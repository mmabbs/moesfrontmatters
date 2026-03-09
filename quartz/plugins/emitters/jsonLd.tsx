import { QuartzEmitterPlugin } from "../types"
import { QuartzPluginData } from "../vfile"
import { joinSegments } from "../../util/path"

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
  sameAs: [
    "https://www.linkedin.com/in/moeabbas/",
    "https://github.com/InquisitiveBadger",
  ],
}

interface PersonSchema {
  "@context": "https://schema.org"
  "@type": "Person"
  name: string
  jobTitle?: string
  url: string
  sameAs?: string[]
}

interface WebSiteSchema {
  "@context": "https://schema.org"
  "@type": "WebSite"
  name: string
  url: string
  author: { "@type": "Person"; name: string }
}

interface ArticleSchema {
  "@context": "https://schema.org"
  "@type": "Article"
  headline: string
  description?: string
  author: { "@type": "Person"; name: string }
  datePublished?: string
  dateModified?: string
  url: string
}

interface CreativeWorkSchema {
  "@context": "https://schema.org"
  "@type": "CreativeWork"
  name: string
  description?: string
  author: { "@type": "Person"; name: string }
  url: string
}

function generatePersonSchema(baseUrl: string, opts: JsonLdOptions): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.authorName,
    jobTitle: opts.authorJobTitle,
    url: `https://${baseUrl}`,
    sameAs: opts.sameAs,
  }
}

function generateWebSiteSchema(
  baseUrl: string,
  siteTitle: string,
  opts: JsonLdOptions,
): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: `https://${baseUrl}`,
    author: {
      "@type": "Person",
      name: opts.authorName,
    },
  }
}

function generateArticleSchema(
  baseUrl: string,
  pageData: QuartzPluginData,
  opts: JsonLdOptions,
): ArticleSchema | null {
  const frontmatter = pageData.frontmatter
  if (!frontmatter) return null

  // Only generate Article schema for pages with dates
  const datePublished = frontmatter.published ?? frontmatter.created
  if (!datePublished) return null

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      name: opts.authorName,
    },
    datePublished: datePublished,
    dateModified: frontmatter.modified,
    url: `https://${joinSegments(baseUrl, pageData.slug ?? "")}`,
  }
}

function generateCreativeWorkSchema(
  baseUrl: string,
  pageData: QuartzPluginData,
  opts: JsonLdOptions,
): CreativeWorkSchema | null {
  const frontmatter = pageData.frontmatter
  if (!frontmatter) return null

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: frontmatter.title,
    description: frontmatter.description,
    author: {
      "@type": "Person",
      name: opts.authorName,
    },
    url: `https://${joinSegments(baseUrl, pageData.slug ?? "")}`,
  }
}

export const JsonLd: QuartzEmitterPlugin<Partial<JsonLdOptions>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "JsonLd",
    getQuartzComponents: () => [],
    emit: async () => [],
    externalResources: (ctx) => {
      const baseUrl = ctx.cfg.configuration.baseUrl ?? ""
      const siteTitle = ctx.cfg.configuration.pageTitle

      return {
        additionalHead: [
          (pageData: QuartzPluginData) => {
            const schemas: object[] = []
            const slug = pageData.slug ?? ""
            const isHomepage = slug === "index"
            const slugLower = slug.toLowerCase()
            const isProjectPage =
              slugLower.startsWith("digital-garden/") && slugLower !== "digital-garden/index"

            // Person + WebSite schema on homepage
            if (isHomepage) {
              schemas.push(generatePersonSchema(baseUrl, opts))
              schemas.push(generateWebSiteSchema(baseUrl, siteTitle, opts))
            }

            // CreativeWork schema for project pages
            if (isProjectPage) {
              const creativeWorkSchema = generateCreativeWorkSchema(baseUrl, pageData, opts)
              if (creativeWorkSchema) {
                schemas.push(creativeWorkSchema)
              }
            }

            // Article schema for pages with dates (can coexist with CreativeWork)
            const articleSchema = generateArticleSchema(baseUrl, pageData, opts)
            if (articleSchema) {
              schemas.push(articleSchema)
            }

            if (schemas.length === 0) return <></>

            return (
              <>
                {schemas.map((schema, i) => (
                  <script
                    key={`jsonld-${i}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
