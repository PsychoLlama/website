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
          <PageTitle>Manly Page</PageTitle>
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

        <Subheading>Social</Subheading>
        <Paragraph>
          Whenever the tradeoffs are reasonable, I prefer to use Free and Open
          Source Software instead of major technology products. These choices
          are reflected by my on-line presence. You won&apos;t find me on
          Twitter or Facebook.
        </Paragraph>

        <FlagList>
          <FlagName>microblog</FlagName>
          <FlagValue>
            ActivityPub platforms are a spark of wonder in a dark world, and
            Mastodon is their leader. I post under the handle{' '}
            <Hyperlink
              target="_blank"
              href="https://fosstodon.org/@PsychoLlama"
            >
              @PsychoLlama@fosstodon.org
            </Hyperlink>{' '}
            (see also:{' '}
            <Hyperlink
              target="_blank"
              href="https://pixelfed.social/PsychoLlama"
            >
              Pixelfed
            </Hyperlink>
            ).
          </FlagValue>

          <FlagName>chat</FlagName>
          <FlagValue>
            Matrix is an open standard for encrypted chat. My address is{' '}
            <Hyperlink href="https://matrix.to/#/@psychollama271:matrix.org">
              @psychollama271:matrix.org
            </Hyperlink>
            . Remember, the faster we adopt Matrix, the faster XMPP can be put
            to rest. In hell.
          </FlagValue>

          <FlagName>source-control</FlagName>
          <FlagValue>
            All my public work is done under the username{' '}
            <Hyperlink href="https://github.com/PsychoLlama">
              @PsychoLlama
            </Hyperlink>{' '}
            on GitHub&hellip; for now. Eagerly awaiting federation support for
            self-hosted alternatives.
          </FlagValue>
        </FlagList>

        <Paragraph>
          If you haven&apos;t used Mastodon, I highly recommend it. Very few
          open source projects actually benefit from more users, but social
          media platforms are the perfect exception. It&apos;s the easiest way
          to contribute to something bigger.
        </Paragraph>

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
          from a career in JavaScript drives interest in web development too.
          It&apos;s a bad habit, I&apos;m trying to quit.
        </Paragraph>

        <Paragraph>
          When I&apos;m not writing software, I enjoy science fiction, exploring
          big cities, COD, playing guitar, and thinking about writing more
          software.
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
    content: 'about(7)';
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

  :first-of-type {
    margin-top: 2rem;
  }
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  margin-left: 4rem;
  margin-bottom: 2rem;

  & + & {
    margin-top: 1rem;
  }

  @media screen and (max-width: 640px) {
    margin-left: 2rem;
  }
`;

const FlagList = styled.dl`
  margin: 2rem 4rem;
  margin-right: 0;
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
