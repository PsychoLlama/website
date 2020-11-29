import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import sidebarTilde from '../assets/vim-gutter-symbol.svg';
import Anchor from '../components/Anchor';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.colors.background};
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
  color: ${(props) => props.theme.colors.text};
  font-family: Hack, monospace;
  font-size: 16px;
  line-height: 1.4rem;
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
  color: ${(props) => props.theme.colors.blue};
  margin-right: 1rem;
  background-image: url('${sidebarTilde}');
  background-repeat: repeat-y;
  width: 1rem;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Hero = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  flex-direction: column;
  font-size: 20px;
  line-height: 2rem;
`;

const IntroductionLineItem = styled.p`
  margin: 0;
`;

const MyName = styled(IntroductionLineItem)`
  margin-bottom: 2rem;
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

const NavLink = styled.a`
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

const TaggedLink = styled(Anchor)`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  ::before {
    content: '<';
  }

  ::after {
    content: '>';
  }

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

const oneDark = {
  colors: {
    background: '#282c34',
    text: '#abb2bf',
    blue: '#61afef',
    red: '#e06c75',
    green: '#98c379',
  },
};

export default function Site() {
  const links = [
    { name: 'Home', target: '/' },
    { name: 'About Me', target: '/' },
  ];

  return (
    <>
      <ThemeProvider theme={oneDark}>
        <GlobalStyle />
        <Container>
          <Content>
            <VimSidebar />
            <Hero>
              <MyName>Jesse Gibson</MyName>
              <IntroductionLineItem>
                <TaggedLink href="https://github.com/PsychoLlama">
                  PsychoLlama
                </TaggedLink>{' '}
                on GitHub
              </IntroductionLineItem>
              <IntroductionLineItem>
                Software Engineer in Portland, Oregon
              </IntroductionLineItem>
            </Hero>
          </Content>

          <Navigation>
            <SiteName>PsychoLlama</SiteName>

            <Links>
              {links.map((link, index) => (
                <NavItem key={index}>
                  <NavLink href={link.target}>
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
      </ThemeProvider>
    </>
  );
}
