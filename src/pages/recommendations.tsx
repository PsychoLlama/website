import { PageProps, graphql } from 'gatsby';
import React from 'react';
import TmuxShell from '../components/TmuxShell';
import { ManPage } from '../components/ManPage';
import ManPageHtml, { type HtmlAst } from '../components/ManPageHtml';

export const Head = () => (
  <>
    <title>Recommendations | PsychoLlama</title>
  </>
);

export default function Recommendations(props: PageProps<DataProps>) {
  const [{ htmlAst }] = props.data.file.children;

  return (
    <TmuxShell currentPage="/recommendations/">
      <ManPage>
        <ManPageHtml node={htmlAst.children} section="recommendations(7)" />
      </ManPage>
    </TmuxShell>
  );
}

interface DataProps extends Queries.RecommendationsMarkdownQuery {
  file: {
    children: [{ html: string; htmlAst: HtmlAst }];
  };
}

export const query = graphql`
  query RecommendationsMarkdown {
    file(name: { eq: "recommendations" }) {
      children {
        ... on MarkdownRemark {
          htmlAst
        }
      }
    }
  }
`;
