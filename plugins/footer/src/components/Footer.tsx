import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import style from "./styles/footer.scss";
// @ts-expect-error inline script imported as text by the tsup loader
import emailScript from "./scripts/email.inline.ts";

// Local fork of quartz-community/footer for moesfrontmatters.com.
// Every page ends on an optional domain nav, profile links with the contact
// email after them, and a copyright line that keeps the Quartz credit.
export interface FooterOptions {
  nav: Record<string, string>;
  contactLabel: string;
  contact: string;
  contactText: string;
  links: Record<string, string>;
  owner: string;
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, "");

// The contact option is written as "name[at]domain". The page carries the
// real address reversed and base64-encoded, so scrapers reading the HTML
// don't find it; email.inline.ts decodes it into a mailto: link. The link
// reads as contactText ("Email" by default), never as the address.
const toAddress = (s: string) => s.replace(/\s*\[at\]\s*/i, "@").replace(/\s*\[dot\]\s*/gi, ".");
const isAddress = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const encodeAddress = (s: string) =>
  Buffer.from(s.split("").reverse().join("")).toString("base64");

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
              {isAddress(toAddress(opts.contact)) ? (
                <a class="footer-email" data-email={encodeAddress(toAddress(opts.contact))}>
                  {opts.contactText ?? "Email"}
                </a>
              ) : (
                opts.contact
              )}
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
            <a href="https://quartz.jzhao.xyz/">Quartz v5</a>
          </p>
        )}
      </footer>
    );
  };

  Footer.css = style;
  Footer.afterDOMLoaded = emailScript;
  return Footer;
}) satisfies QuartzComponentConstructor;
