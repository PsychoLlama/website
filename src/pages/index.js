import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import TmuxShell from '../components/TmuxShell';
import Anchor from '../components/Anchor';
import ManPage from '../components/ManPage';

export default function AboutMe() {
  return (
    <TmuxShell currentPage="/">
      <Helmet>
        <title>About | PsychoLlama</title>
      </Helmet>

      <ManPage section="about(7)">
        <h1>About Me</h1>

        <h2>Synopsis</h2>
        <p>
          <strong>Jesse Gibson</strong> - American computer programmer.
        </p>

        <h2>Company</h2>
        <p>
          None. Currently on sabbatical, taking time to finish side projects and
          learn new things.
        </p>

        <h2>Social</h2>
        <p>
          Whenever the tradeoffs are reasonable, I prefer to use Free and Open
          Source Software instead of major technology products. These choices
          are reflected by my on-line presence. You won&apos;t find me on
          Twitter or Facebook.
        </p>

        <dl>
          <dt>microblog</dt>
          <dd>
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
          </dd>

          <dt>chat</dt>
          <dd>
            Matrix is an open standard for encrypted chat. My address is{' '}
            <Anchor href="https://matrix.to/#/@psychollama271:matrix.org">
              @psychollama271:matrix.org
            </Anchor>
            . Remember, the faster we adopt Matrix, the faster XMPP can be put
            to rest. In hell.
          </dd>

          <dt>source-control</dt>
          <dd>
            All my public work is done under the username{' '}
            <Anchor href="https://github.com/PsychoLlama">@PsychoLlama</Anchor>{' '}
            on GitHub&hellip; for now. Eagerly awaiting federation support for
            self-hosted alternatives.
          </dd>
        </dl>

        <p>
          If you haven&apos;t used Mastodon, I highly recommend it. Very few
          open source projects actually benefit from more users, but social
          media platforms are the perfect exception. It&apos;s the easiest way
          to contribute to something bigger.
        </p>

        <h2>Interests</h2>
        <p>
          CRDTs, Peer-to-Peer systems, terminals, CLI tools (see{' '}
          <Link to="/recommendations">recommendations</Link>
          ), and writing the occasional Vim plugin. Sometimes Stockholm Syndrome
          from a career in JavaScript drives interest in web development too.
        </p>

        <p>
          When I&apos;m not writing software, I enjoy science fiction, exploring
          big cities, COD, playing guitar, and thinking about writing more
          software.
        </p>
      </ManPage>
    </TmuxShell>
  );
}
