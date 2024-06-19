import { PageProps, graphql } from 'gatsby';
import React from 'react';
import TmuxShell from '../components/TmuxShell';
import ManPage from '../components/ManPage';
import Markdown, { type HtmlAst } from '../components/Markdown';

export const Head = () => (
  <>
    <title>Recommendations | PsychoLlama</title>
  </>
);

export default function Recommendations(props: PageProps<DataProps>) {
  const [{ htmlAst }] = props.data.file.children;
  const { revision } = props.data.git;

  return (
    <TmuxShell currentPage="/recommendations/" revision={revision}>
      <ManPage synopsis section="recommendations(7)">
        <Markdown htmlAst={htmlAst} />
      </ManPage>
    </TmuxShell>
  );
}

interface DataProps {
  git: {
    revision: string;
  };

  file: {
    children: [{ html: string; htmlAst: HtmlAst }];
  };
}

export const query = graphql`
  query RecommendationsMarkdown {
    git {
      revision
    }

    file(name: { eq: "recommendations" }) {
      children {
        ... on MarkdownRemark {
          htmlAst
        }
      }
    }
  }
`;
