import React from 'react';
import { Link } from 'gatsby';
import TmuxShell from '../components/TmuxShell';
import * as styles from '../components/ManPage.css';
import {
  ManPage,
  Title,
  Subheading,
  Paragraph,
  Anchor,
  DefinitionList,
  DefinitionTerm,
  DefinitionDescription,
} from '../components/ManPage';

export const Head = () => (
  <>
    <title>About | PsychoLlama</title>
  </>
);

export default function AboutMe() {
  return (
    <TmuxShell currentPage="/">
      <ManPage>
        <Title section="about(7)" synopsis>
          About Me
        </Title>

        <Subheading>Synopsis</Subheading>
        <Paragraph>
          <strong>Jesse Gibson</strong> - American computer programmer.
        </Paragraph>

        <Subheading>Company</Subheading>
        <Paragraph>
          I am on the <Anchor href="https://www.coscreen.co/">CoScreen</Anchor>{' '}
          team at <Anchor href="https://www.datadoghq.com/">Datadog</Anchor>.
        </Paragraph>

        <Subheading>Social</Subheading>
        <Paragraph>
          Whenever the tradeoffs are reasonable, I prefer to use Free and Open
          Source Software instead of major technology products. These choices
          are reflected by my on-line presence. You won&apos;t find me on
          Twitter or Facebook.
        </Paragraph>

        <DefinitionList>
          <DefinitionTerm>microblog</DefinitionTerm>
          <DefinitionDescription>
            ActivityPub platforms are a spark of wonder in a dark world, and
            Mastodon is their leader. I post under the handle{' '}
            <Anchor
              rel="me"
              target="_blank"
              href="https://fosstodon.org/@PsychoLlama"
            >
              @PsychoLlama@fosstodon.org
            </Anchor>{' '}
            (see also:{' '}
            <Anchor target="_blank" href="https://pixelfed.social/PsychoLlama">
              Pixelfed
            </Anchor>
            ).
          </DefinitionDescription>

          <DefinitionTerm>chat</DefinitionTerm>
          <DefinitionDescription>
            Matrix is an open standard for encrypted chat. My address is{' '}
            <Anchor href="https://matrix.to/#/@psychollama271:matrix.org">
              @psychollama271:matrix.org
            </Anchor>
            . Remember, the faster we adopt Matrix, the faster XMPP can be put
            to rest. In hell.
          </DefinitionDescription>

          <DefinitionTerm>source-control</DefinitionTerm>
          <DefinitionDescription>
            All my public work is done under the username{' '}
            <Anchor href="https://github.com/PsychoLlama">@PsychoLlama</Anchor>{' '}
            on GitHub&hellip; for now. Eagerly awaiting federation support for
            self-hosted alternatives.
          </DefinitionDescription>
        </DefinitionList>

        <Paragraph>
          If you haven&apos;t used Mastodon, I highly recommend it. Very few
          open source projects actually benefit from more users, but social
          media platforms are the perfect exception. It&apos;s the easiest way
          to contribute to something bigger.
        </Paragraph>

        <Subheading>Interests</Subheading>
        <Paragraph>
          CRDTs, Peer-to-Peer systems, terminals, CLI tools (see{' '}
          <Link className={styles.link} to="/recommendations">
            recommendations
          </Link>
          ), and writing the occasional Vim plugin. Sometimes Stockholm Syndrome
          from a career in JavaScript drives interest in web development too.
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
