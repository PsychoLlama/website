import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

export default class Markdown extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query RecommendationsMarkdown {
            file(name: { eq: "recommendations" }) {
              children {
                ... on MarkdownRemark {
                  html
                }
              }
            }
          }
        `}
        render={this.renderMarkdown}
      ></StaticQuery>
    );
  }

  renderMarkdown = (data) => {
    const [{ html }] = data.file.children.filter((child) => child.html);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
