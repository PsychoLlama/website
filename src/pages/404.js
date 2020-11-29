import React from 'react';
import styled from 'styled-components';
import TmuxShell from '../components/TmuxShell';

export default function BlameMongoDb() {
  return (
    <TmuxShell>
      <Container>
        <Headers>
          HTTP/1.1 <RedHighlight>404</RedHighlight>
          <br />
          Server: bash/2.03 (Unix)
          <br />
          Content-Type: text/plain; charset=ascii
        </Headers>

        <Body>cat: no such file or directory.</Body>
      </Container>
    </TmuxShell>
  );
}

const Container = styled.div`
  padding: 1rem 2rem;
`;

const Headers = styled.p`
  margin: 0;
  line-height: 1.4rem;
`;

const RedHighlight = styled.span`
  color: ${(props) => props.theme.colors.red};
  text-decoration: underline dashed;
`;

const Body = styled.p`
  white-space: pre;
`;
