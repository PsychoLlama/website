/* eslint-env node */
const { createRemoteFileNode } = require('gatsby-source-filesystem');

/**
 * Download the "recommendations" markdown file. The markdown plugin
 * automatically notices the file extension and parses/exposes the contents
 * via GraphQL.
 */
exports.sourceNodes = async ({ actions, getCache, createNodeId }) => {
  await createRemoteFileNode({
    url:
      'https://raw.githubusercontent.com/PsychoLlama/recommendations/main/README.md',
    getCache,
    createNodeId,
    createNode: actions.createNode,
    name: 'recommendations',
  });
};
