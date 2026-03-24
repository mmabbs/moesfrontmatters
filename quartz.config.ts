import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Moe's Frontmatters",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "moesfrontmatters.com",
    ignorePatterns: ["private", "templates", ".obsidian", "draft-pages"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Playfair Display",
          weights: [400, 900],
        },
        body: {
          name: "Bricolage Grotesque",
          weights: [200, 400, 800],
        },
        code: {
          name: "JetBrains Mono",
          weights: [400, 500],
        },
      },
      colors: {
        lightMode: {
          light: "#FEFCF8",
          lightgray: "#F5F2EA",
          gray: "#E8E4D9",
          darkgray: "#5C5955",
          dark: "#1A1918",
          secondary: "#6b8699", // slate (link)
          tertiary: "#5e7d53", // lichen (accent)
          highlight: "#EBE8DE",
          textHighlight: "#fff2a8",
        },
        darkMode: {
          light: "#0A0908",
          lightgray: "#0F0E0C",
          gray: "#1E1B18",
          darkgray: "#9C9891",
          dark: "#FAF8F5",
          secondary: "#839aad", // slate (link)
          tertiary: "#7a9e6d", // lichen (accent)
          highlight: "#1E1B18",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
      Plugin.JsonLd(),
    ],
  },
}

export default config
