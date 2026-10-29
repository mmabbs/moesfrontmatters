import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";

// Local fork of quartz-community/footer for moesfrontmatters.com.
// Every page ends on an optional domain nav, profile links with the contact
// email after them, and a copyright line that keeps the Quartz credit.
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
    // A folder's index page has the slug "folder/index"; compare it as "folder".
    const slug = trimSlashes(String(fileData?.slug ?? "")).replace(/(^|\/)index$/, "");
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
        <ul class="footer-links">
          {Object.entries(links).map(([text, href]) => (
            <li>
              <a href={href}>{text}</a>
            </li>
          ))}
          {opts?.contact && (
            <li class="footer-contact">
              {opts.contactLabel ? `${opts.contactLabel} ` : ""}
              {opts.contact}
            </li>
          )}
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
