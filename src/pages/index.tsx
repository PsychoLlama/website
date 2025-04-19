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
          Whenever tradeoffs are reasonable I prefer Free and Open Source
          Software over major tech products. These choices are reflected by my
          on-line presence. You won&apos;t find me on Twitter or Facebook.
        </Paragraph>

        <DefinitionList>
          <DefinitionTerm>social</DefinitionTerm>
          <DefinitionDescription>
            I like the smaller neighborhood feel of the Fediverse. I post
            infrequently on{' '}
            <Anchor
              rel="me"
              target="_blank"
              href="https://fosstodon.org/@PsychoLlama"
            >
              Mastodon
            </Anchor>{' '}
            and{' '}
            <Anchor target="_blank" href="https://pixelfed.social/PsychoLlama">
              Pixelfed
            </Anchor>
            . A little on{' '}
            <Anchor
              target="_blank"
              href="https://bsky.app/profile/sourcemap.bsky.social"
            >
              Bluesky
            </Anchor>{' '}
            too, but it hasn't stuck.
          </DefinitionDescription>

          <DefinitionTerm>messaging</DefinitionTerm>
          <DefinitionDescription>
            Matrix is an open standard for real-time encrypted chat. My address
            is{' '}
            <Anchor href="https://matrix.to/#/@psychollama271:matrix.org">
              @psychollama271:matrix.org
            </Anchor>
            .
          </DefinitionDescription>

          <DefinitionTerm>software</DefinitionTerm>
          <DefinitionDescription>
            Strong network effects keep me on GitHub. Most projects are under{' '}
            <Anchor href="https://github.com/PsychoLlama">@PsychoLlama</Anchor>.
          </DefinitionDescription>

          <DefinitionTerm>weblog</DefinitionTerm>
          <DefinitionDescription>
            Long-form posts about software live on my blog,{' '}
            <Anchor rel="me" target="_blank" href="https://blog.psychollama.io">
              Asap&apos;s Fables
            </Anchor>
            .
          </DefinitionDescription>
        </DefinitionList>

        <Subheading>Interests</Subheading>
        <Paragraph>
          CRDTs, Peer-to-Peer systems, WebRTC, Nix, Nushell, CLI tools (see{' '}
          <Link className={styles.link} to="/recommendations">
            recommendations
          </Link>
          ), and writing the occasional Neovim plugin. Sometimes Stockholm
          Syndrome from a career in JavaScript drives interest in web
          development too.
        </Paragraph>

        <Paragraph>
          When I&apos;m not writing software, I enjoy science fiction, exploring
          cities, COD, playing guitar, and thinking about writing more software.
        </Paragraph>
      </ManPage>
    </TmuxShell>
  );
}
