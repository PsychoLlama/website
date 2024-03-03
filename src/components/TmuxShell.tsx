import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';

export default function TmuxShell({
  children,
  currentPage,
  revision,
}: {
  children: React.ReactNode;
  currentPage?: string;
  revision: string;
}) {
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
      navigate(links[targetWindow].target);
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
    <Container>
      {children}
      <Navigation>
        <Revision>
          <GitHubLink
            to="https://github.com/PsychoLlama/website"
            title="View source on GitHub"
            target="_blank"
          >
            {revision ?? 'HEAD'}
          </GitHubLink>
        </Revision>

        <Links>
          {links.map((link, index) => (
            <NavItem key={index} data-active={currentPage === link.target}>
              <NavLink to={link.target}>{link.name}</NavLink>
            </NavItem>
          ))}
        </Links>
      </Navigation>
    </Container>
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

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
`;

const Navigation = styled.nav`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.green};
  display: flex;
  position: sticky;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.background};
`;

const Links = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  counter-set: nav-link 0;
`;

const NavItem = styled.li`
  margin: 0 1ch;

  &::first-child {
    margin-left: 0;
  }

  &::before {
    content: counter(nav-link) ':';
    counter-increment: nav-link;
  }

  &[data-active='true'] {
    margin-right: 0;

    &::after {
      content: '*';
    }
  }
`;

const Revision = styled(NavItem).attrs({ as: 'p' })`
  margin: 0;

  &::before {
    content: '[';
  }

  &::after {
    content: ']';
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  border-bottom: 1px solid transparent;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.text};
    border-bottom-color: ${(props) => props.theme.colors.text};
  }
`;

const GitHubLink = styled(Link)`
  cursor: pointer;
  border-bottom: 1px solid transparent;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.text};
    border-bottom-color: ${(props) => props.theme.colors.text};
  }
`;
