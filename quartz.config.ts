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
    baseUrl: "inquisitivebadger.github.io/moesfrontmatters",
    ignorePatterns: ["private", "templates", ".obsidian"],
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
          secondary: "#0B8299",  // frost (link)
          tertiary: "#D4530A",   // ember (accent)
          highlight: "#EBE8DE",
          textHighlight: "#fff2a8",
        },
        darkMode: {
          light: "#0A0908",
          lightgray: "#0F0E0C",
          gray: "#1E1B18",
          darkgray: "#9C9891",
          dark: "#FAF8F5",
          secondary: "#7DD3E8",   // frost (link)
          tertiary: "#FF6B35",    // ember (accent)
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
    ],
  },
}

export default config
