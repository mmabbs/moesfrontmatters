import { QuartzComponent } from '@quartz-community/types';
export { QuartzComponent, QuartzComponentProps, StringResource } from '@quartz-community/types';

interface SectionNavOptions {
    links: Record<string, string>;
}
declare const _default: (opts?: Partial<SectionNavOptions>) => QuartzComponent;

export { _default as SectionNav, type SectionNavOptions };
