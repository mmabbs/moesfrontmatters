import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/section-nav.scss";
import script from "./scripts/section-menu";

// Local plugin for moesfrontmatters.com.
// A short list of the site's sections for the left sidebar.
// On a project page, the section named in its `section:` frontmatter is
// marked too, so the nav doubles as the way back. On phones the list hides
// behind a menu button that opens the same links in a full-screen dialog.
export interface SectionNavOptions {
  links: Record<string, string>;
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");

export default ((opts?: Partial<SectionNavOptions>) => {
  const links = opts?.links ?? {};

  const SectionNav: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    // A folder's index page has the slug "folder/index"; compare it as "folder".
    const slug = trimSlashes(String(fileData?.slug ?? "")).replace(/(^|\/)index$/, "");
    const section = trimSlashes(String(fileData?.frontmatter?.section ?? ""));
    const current = (href: string) => {
      const target = trimSlashes(href);
      if (target === slug) return "page";
      // Notes inside a section's folder (digital-garden/...) belong to it.
      if (target && slug.startsWith(`${target}/`)) return "true";
      if (section && target === section) return "true";
      return undefined;
    };
    const items = Object.entries(links).map(([text, href]) => (
      <li>
        <a href={href} aria-current={current(href)}>
          {text}
        </a>
      </li>
    ));
    return (
      <nav class={`section-nav ${displayClass ?? ""}`} aria-label="Site">
        <ul class="section-nav-list">{items}</ul>
        <button
          type="button"
          class="section-menu-toggle"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="section-menu"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <dialog id="section-menu" class="section-menu" aria-label="Sections">
          <button type="button" class="section-menu-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <ul>{items}</ul>
        </dialog>
      </nav>
    );
  };

  SectionNav.css = style;
  SectionNav.afterDOMLoaded = script;
  return SectionNav;
}) satisfies QuartzComponentConstructor;
