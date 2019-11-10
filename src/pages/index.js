import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import sidebarTilde from './vim-sidebar-tilde.svg';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.background};
  }

  body {
    margin: 0;
  }
`;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  font-family: Hack, monospace;
  font-size: 16px;
`;

const Content = styled.main`
  padding: 0.5rem;
  display: flex;
  flex-grow: 1;
`;

const VimSidebar = styled.div.attrs({
  role: 'presentation',
  'aria-hidden': true,
})`
  display: flex;
  color: ${props => props.theme.colors.blue};
  margin-right: 1rem;
  background-image: url("${sidebarTilde}");
  background-repeat: repeat-y;
  width: 1rem;
`;

const Navigation = styled.nav`
  padding: 0.5rem;
  color: ${props => props.theme.colors.blue};
  display: flex;
`;

const Links = styled.ul`
  padding: 0;
  margin: 0;
  list-style: number inside;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;

  ::first-child {
    margin-left: 0;
  }
`;

const Link = styled(NavItem)`
  cursor: pointer;

  :hover {
    color: ${props => props.theme.colors.activeBlue};
  }
`;

const SiteName = styled(Link).attrs({ as: 'p' })`
  margin: 0;

  ::before {
    content: '[';
  }

  ::after {
    content: ']';
  }
`;

const oneDark = {
  colors: {
    background: '#282c34',
    text: '#abb2bf',
    blue: '#61afef',
    activeBlue: '#abb2bf',
    red: '#e06c75',
  },
};

const Site = () => (
  <>
    <ThemeProvider theme={oneDark}>
      <GlobalStyle />
      <Container>
        <Content>
          <VimSidebar />
        </Content>

        <Navigation>
          <SiteName>PsychoLlama</SiteName>

          <Links>
            <Link>Home</Link>
            <Link>About Me</Link>
          </Links>
        </Navigation>
      </Container>
    </ThemeProvider>
  </>
);

export default Site;
