import { createRemoteFileNode } from 'gatsby-source-filesystem';
import type { GatsbyNode } from 'gatsby';

/**
 * Download the "recommendations" markdown file. The markdown plugin
 * automatically notices the file extension and parses/exposes the contents
 * via GraphQL.
 */
export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  getCache,
  createNodeId,
}) => {
  await createRemoteFileNode({
    url: 'https://raw.githubusercontent.com/PsychoLlama/recommendations/main/README.md',
    getCache,
    createNodeId,
    createNode: actions.createNode,
    name: 'recommendations',
  });
};
