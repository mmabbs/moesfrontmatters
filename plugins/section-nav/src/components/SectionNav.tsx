import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/section-nav.scss";

// Local plugin for moesfrontmatters.com.
// A short list of the site's sections for the left sidebar.
// On a project page, the section named in its `section:` frontmatter is
// marked too, so the nav doubles as the way back.
export interface SectionNavOptions {
  links: Record<string, string>;
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");

export default ((opts?: Partial<SectionNavOptions>) => {
  const links = opts?.links ?? {};

  const SectionNav: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const slug = trimSlashes(String(fileData?.slug ?? ""));
    const section = trimSlashes(String(fileData?.frontmatter?.section ?? ""));
    const current = (href: string) => {
      const target = trimSlashes(href);
      if (target === slug || (target === "" && slug === "index")) return "page";
      if (section && target === section) return "true";
      return undefined;
    };
    return (
      <nav class={`section-nav ${displayClass ?? ""}`} aria-label="Site">
        <ul>
          {Object.entries(links).map(([text, href]) => (
            <li>
              <a href={href} aria-current={current(href)}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  SectionNav.css = style;
  return SectionNav;
}) satisfies QuartzComponentConstructor;
