import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import TmuxShell from '../components/TmuxShell';
import Anchor from '../components/Anchor';

export default function AboutMe(props) {
  return (
    <TmuxShell currentPage={props.path}>
      <Helmet>
        <title>About | PsychoLlama</title>
      </Helmet>

      <ManPage>
        <Header>
          <PageTitle>Man Page</PageTitle>
        </Header>

        <Subheading>Synopsis</Subheading>
        <Paragraph>
          <strong>Jesse Gibson</strong> - American computer programmer.
        </Paragraph>

        <Subheading>Company</Subheading>
        <Paragraph>
          None. Currently on sabbatical, taking time to finish side projects and
          learn new things.
        </Paragraph>

        <Subheading>Contact</Subheading>
        <Paragraph>
          I have no social media presence aside from FOSS networks and GitHub.
          Perhaps it&apos;s extreme, but I heartily recommend it.
        </Paragraph>

        <FlagList>
          <FlagName>microblog</FlagName>
          <FlagValue>
            My handle is{' '}
            <Hyperlink
              target="_blank"
              href="https://fosstodon.org/@PsychoLlama"
            >
              @PsychoLlama@fosstodon.org
            </Hyperlink>
            , which points to a node in the Mastodon federated social network.
          </FlagValue>

          <FlagName>chat</FlagName>
          <FlagValue>
            I&apos;m{' '}
            <Hyperlink href="https://matrix.to/#/@psychollama271:matrix.org">
              @psychollama271:matrix.org
            </Hyperlink>{' '}
            on Matrix. Feel free to say hello any time. It&apos;s always
            enjoyable to meet new people.
          </FlagValue>

          <FlagName>source-control</FlagName>
          <FlagValue>
            All my public work is done under the username{' '}
            <Hyperlink href="https://github.com/PsychoLlama">
              @PsychoLlama
            </Hyperlink>{' '}
            on GitHub.
          </FlagValue>
        </FlagList>

        <Subheading>Interests</Subheading>
        <Paragraph>
          CRDTs, Peer-to-Peer systems, terminals, CLI tools (see{' '}
          <Hyperlink
            target="_blank"
            href="https://github.com/PsychoLlama/recommendations#terminal-tools"
          >
            recommendations
          </Hyperlink>
          ), and writing the occasional Vim plugin. Sometimes Stockholm Syndrome
          from a career in JavaScript drives inexplicable curiosity in web
          development too.
        </Paragraph>

        <Paragraph>
          When I&apos;m not writing software, I enjoy science fiction, exploring
          big cities, playing guitar, and thinking about writing more software.
        </Paragraph>
      </ManPage>
    </TmuxShell>
  );
}

const ManPage = styled.main`
  padding: 0.5rem 1rem;
  line-height: 1.4rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.green};
  font-size: 1rem;
`;

const PageTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  ::before,
  ::after {
    content: 'about(6)';
    display: block;
  }

  font-size: inherit;
  margin: 0;
  font-weight: normal;

  @media screen and (max-width: 640px) {
    ::before {
      display: none;
    }
  }
`;

const Subheading = styled.h2`
  color: ${(props) => props.theme.colors.magenta};
  font-size: inherit;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  margin-left: 4rem;

  & + & {
    margin-top: 1rem;
  }

  @media screen and (max-width: 640px) {
    margin-left: 2rem;
  }
`;

const FlagList = styled.dl`
  margin: 0;
  margin-top: 2rem;
  margin-left: 4rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;

  @media screen and (max-width: 640px) {
    margin-left: 2rem;
    grid-template-columns: 1fr;
  }
`;

const FlagName = styled.dt`
  color: ${(props) => props.theme.colors.cyan};

  ::before {
    content: '--';
  }
`;

const FlagValue = styled.dd`
  margin: 0;
  max-width: 50rem;

  @media screen and (max-width: 640px) {
    margin-bottom: 2rem;
  }
`;

const Hyperlink = styled(Anchor)`
  color: ${(props) => props.theme.colors.yellow};
`;
