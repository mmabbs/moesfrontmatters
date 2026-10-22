import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";

// Local fork of quartz-community/footer for moesfrontmatters.com.
// Every page ends on the domain nav, a contact line, and profile links,
// in place of the upstream "Created with Quartz" credit.
export interface FooterOptions {
  nav: Record<string, string>;
  contactLabel: string;
  contact: string;
  links: Record<string, string>;
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");

export default ((opts?: Partial<FooterOptions>) => {
  const nav = opts?.nav ?? {};
  const links = opts?.links ?? {};

  const Footer: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const slug = trimSlashes(String(fileData?.slug ?? ""));
    return (
      <footer class={`${displayClass ?? ""}`}>
        {Object.keys(nav).length > 0 && (
          <nav class="footer-nav" aria-label="Sections">
            <ul>
              {Object.entries(nav).map(([text, href]) => (
                <li>
                  <a href={href} aria-current={trimSlashes(href) === slug ? "page" : undefined}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {opts?.contact && (
          <p class="footer-contact">
            {opts.contactLabel ? `${opts.contactLabel} ` : ""}
            <span class="contact">{opts.contact}</span>
          </p>
        )}
        <ul class="footer-links">
          {Object.entries(links).map(([text, href]) => (
            <li>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
