import { graphql } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import TmuxShell from '../components/TmuxShell';

export default function Recommendations(props) {
  const [{ html }] = props.data.file.children.filter((child) => child.html);

  return (
    <TmuxShell currentPage={props.path}>
      <Helmet>
        <title>Recommendations | PsychoLlama</title>
      </Helmet>

      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </TmuxShell>
  );
}

const Markdown = styled.main`
  // TODO
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
