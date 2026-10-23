import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";

// Local fork of quartz-community/footer for moesfrontmatters.com.
// Every page ends on the domain nav, a contact line, profile links,
// and a copyright line that keeps the Quartz credit.
export interface FooterOptions {
  nav: Record<string, string>;
  contactLabel: string;
  contact: string;
  links: Record<string, string>;
  owner: string;
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
        {opts?.owner && (
          <p class="footer-credit">
            © {new Date().getFullYear()} {opts.owner} · Made with{" "}
            <span class="footer-heart" role="img" aria-label="love">
              ❤️
            </span>{" "}
            and{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz</a>
          </p>
        )}
      </footer>
    );
  };

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
