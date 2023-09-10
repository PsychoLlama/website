import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import TmuxShell from '../components/TmuxShell';
import ManPage from '../components/ManPage';

export default function Recommendations(props) {
  const [{ html }] = props.data.file.children.filter((child) => child.html);
  const { revision } = props.data.git;

  return (
    <TmuxShell currentPage="/recommendations/" revision={revision}>
      <Helmet>
        <title>Recommendations | PsychoLlama</title>
      </Helmet>

      <ManPage
        synopsis
        section="recommendations(7)"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </TmuxShell>
  );
}

export const query = graphql`
  query RecommendationsMarkdown {
    git {
      revision
    }

    file(name: { eq: "recommendations" }) {
      children {
        ... on MarkdownRemark {
          html
        }
      }
    }
  }
`;
