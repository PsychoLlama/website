import { graphql } from 'gatsby';
import React from 'react';
import TmuxShell from '../components/TmuxShell';
import ManPage from '../components/ManPage';

export const Head = () => (
  <>
    <title>Recommendations | PsychoLlama</title>
  </>
);

export default function Recommendations(props) {
  const [{ html }] = props.data.file.children.filter((child) => child.html);
  const { revision } = props.data.git;

  return (
    <TmuxShell currentPage="/recommendations/" revision={revision}>
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
