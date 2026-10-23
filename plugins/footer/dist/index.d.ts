import { QuartzComponent } from '@quartz-community/types';
export { QuartzComponent, QuartzComponentProps, StringResource } from '@quartz-community/types';

interface FooterOptions {
    nav: Record<string, string>;
    contactLabel: string;
    contact: string;
    links: Record<string, string>;
    owner: string;
}
declare const _default: (opts?: Partial<FooterOptions>) => QuartzComponent;

export { _default as Footer, type FooterOptions };
