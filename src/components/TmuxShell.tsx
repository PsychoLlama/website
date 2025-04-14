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

  const keystack = useRef<Array<string>>([]);

  const detectWindowNavigation = useCallback((event: KeyboardEvent) => {
    const keyChord = getKeyChord(event);

    if (keyChord === 'ctrl+b') {
      event.preventDefault();
      event.stopPropagation();
      keystack.current = [];
    }

    keystack.current = keystack.current.slice(-1).concat(keyChord);
    const prefix = keystack.current[0];
    const targetWindow = isNaN(Number(keystack.current[1]))
      ? Infinity
      : Number(keystack.current[1]) - 1;

    if (prefix === 'ctrl+b' && targetWindow < links.length) {
      (navigate as typeof Navigate)(links[targetWindow].target);
    }

    return navigate;
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
            {data.siteBuildMetadata.git.revision}
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
