import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import sidebarTilde from '../assets/vim-gutter-symbol.svg';
import Anchor from '../components/Anchor';
import TmuxShell from '../components/TmuxShell';

const Container = styled.main`
  flex-grow: 1;
  display: flex;
`;

const Content = styled.section`
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

export default function Site(props) {
  return (
    <TmuxShell currentPage={props.path}>
      <Container>
        <Helmet>
          <title>Jesse Gibson | PsychoLlama</title>
        </Helmet>

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
      </Container>
    </TmuxShell>
  );
}
