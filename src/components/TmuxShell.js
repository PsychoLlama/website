import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default function TmuxShell({ children }) {
  const links = [
    { name: 'Home', target: '/' },
    { name: 'About', target: '/about' },
  ];

  return (
    <Container>
      {children}
      <Navigation>
        <SiteName>PsychoLlama</SiteName>

        <Links>
          {links.map((link, index) => (
            <NavItem key={index}>
              <NavLink to={link.target}>
                <span aria-hidden role="presentation">
                  {index + 1}:
                </span>
                {link.name}
              </NavLink>
            </NavItem>
          ))}
        </Links>
      </Navigation>
    </Container>
  );
}

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
`;

const Links = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;

  ::first-child {
    margin-left: 0;
  }
`;

const SiteName = styled(NavItem).attrs({ as: 'p' })`
  margin: 0;

  ::before {
    content: '[';
  }

  ::after {
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

  :hover,
  :focus {
    color: ${(props) => props.theme.colors.text};
    border-bottom-color: ${(props) => props.theme.colors.text};
  }
`;
