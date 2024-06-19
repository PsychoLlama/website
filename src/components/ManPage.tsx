import React from 'react';
import * as styles from './ManPage.css';
import { ExternalLink } from './ExternalLink';

/**
 * Styles HTML to look like a man page viewed by neovim under the OneDark
 * theme, which happens to be my personal setup.
 */
export function ManPage({ children }: { children: React.ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

/** Page title. Includes surrounding `section(n)` tags. */
export function Title(props: { section: string; children: React.ReactNode }) {
  return (
    <h1 className={styles.title} data-section={props.section}>
      {props.children}
    </h1>
  );
}

export function Subheading(props: { children: React.ReactNode }) {
  return <h2 className={styles.subheading}>{props.children}</h2>;
}

export function Paragraph(props: { children: React.ReactNode }) {
  return <p className={styles.paragraph}>{props.children}</p>;
}

export function Anchor(props: React.ComponentPropsWithoutRef<'a'>) {
  return <ExternalLink {...props} className={styles.link} />;
}

export function DefinitionList(props: { children: React.ReactNode }) {
  return <dl className={styles.dl}>{props.children}</dl>;
}

export function DefinitionTerm(props: { children: React.ReactNode }) {
  return <dt className={styles.dt}>{props.children}</dt>;
}

export function DefinitionDescription(props: { children: React.ReactNode }) {
  return <dd className={styles.dd}>{props.children}</dd>;
}
