import React, { useEffect, useCallback, useRef } from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import * as styles from './TmuxShell.css';
import { ExternalLink } from './ExternalLink';
import cx from 'classnames';
import type { navigate as Navigate } from '@reach/router';

export default function TmuxShell({
  children,
  currentPage,
}: {
  children: React.ReactNode;
  currentPage?: string;
}) {
  const data: Queries.BuildDetailsQuery = useStaticQuery(graphql`
    query BuildDetails {
      siteBuildMetadata {
        git {
          revision
        }
      }
    }
  `);

  const links = [
    { name: 'About', target: '/' },
    { name: 'Recommendations', target: '/recommendations/' },
  ];

  const linkIndex = links.findIndex((link) => link.target === currentPage);

  // Key chord of the last key pressed.
  const prevKey = useRef<string>('');

  const detectWindowNavigation = useCallback((event: KeyboardEvent) => {
    const keyChord = getKeyChord(event);

    const commitEvent = () => {
      event.preventDefault();
      event.stopPropagation();
      prevKey.current = keyChord;
    };

    // Prefix key. No action immediately, but the next key might.
    if (keyChord === 'ctrl+b') {
      event.preventDefault();
      event.stopPropagation();
      prevKey.current = keyChord;
      return;
    }

    const numKey = parseInt(keyChord, 10);

    // Example: ctrl+b, key=2: nav to window 2.
    if (
      prevKey.current === 'ctrl+b' &&
      !isNaN(numKey) &&
      numKey < links.length
    ) {
      commitEvent();
      (navigate as typeof Navigate)(links[numKey].target);

      return;
    }

    // Example: ctrl+b, key=n: nav to next window.
    if (
      prevKey.current === 'ctrl+b' &&
      (event.key === 'n' || event.key === 'p')
    ) {
      commitEvent();

      const relativeIndex = event.key === 'n' ? 1 : -1;
      const newIndex =
        (linkIndex + relativeIndex + links.length) % links.length;

      (navigate as typeof Navigate)(links[newIndex].target);

      return;
    }

    prevKey.current = keyChord;
  }, []);

  useEffect(() => {
    document.body.addEventListener('keydown', detectWindowNavigation);
    return () => {
      document.body.removeEventListener('keydown', detectWindowNavigation);
    };
  }, []);

  return (
    <div className={styles.container}>
      {children}

      <nav className={styles.navigation}>
        <p className={cx(styles.navItem, styles.revision)}>
          <ExternalLink
            href="https://github.com/PsychoLlama/website"
            title="View source on GitHub"
            target="_blank"
            className={styles.githubLink}
          >
            {data.siteBuildMetadata!.git.revision}
          </ExternalLink>
        </p>

        <ul className={styles.links}>
          {links.map((link, index) => (
            <li
              className={styles.navItem}
              key={index}
              data-active={currentPage === link.target}
            >
              <Link to={link.target} className={styles.navLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const getKeyChord = (event: KeyboardEvent) => {
  const sequence = [
    event.ctrlKey && 'ctrl',
    event.altKey && 'alt',
    event.metaKey && 'cmd',
    event.key,
  ];

  return sequence.filter(Boolean).join('+');
};
