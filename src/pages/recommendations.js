import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import TmuxShell from '../components/TmuxShell';
import ManPage from '../components/ManPage';

export default function Recommendations(props) {
  const [{ html }] = props.data.file.children.filter((child) => child.html);

  return (
    <TmuxShell currentPage={props.path}>
      <Helmet>
        <title>Recommendations | PsychoLlama</title>
      </Helmet>

      <Markdown
        section="recommendations(7)"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </TmuxShell>
  );
}

const Markdown = styled(ManPage)`
  h1 {
    padding-bottom: 2rem;
  }
`;

export const query = graphql`
  query RecommendationsMarkdown {
    file(name: { eq: "recommendations" }) {
      children {
        ... on MarkdownRemark {
          html
        }
      }
    }
  }
`;
