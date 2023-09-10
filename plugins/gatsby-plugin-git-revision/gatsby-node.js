/* eslint-env node */
const { execSync } = require('child_process');

/**
 * A hacky Gatsby plugin to pull the current git revision. I have no idea what
 * I'm doing.
 *
 * @example
 * query {
 *   git { revision }
 * }
 */

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      git: {
        type: 'GitMetadata',
        resolve() {
          const branch = 'HEAD';
          const revision = execSync(`git rev-parse --short ${branch}`)
            .toString()
            .trim();

          return {
            id: branch,
            revision,
          };
        },
      },
    },
  });
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type GitMetadata implements Node {
      revision: String
    }
  `);
};
