import { execSync } from 'child_process';
import { CreateResolversArgs, SourceNodesArgs } from 'gatsby';

/**
 * A hacky Gatsby plugin to pull the current git revision. I have no idea what
 * I'm doing.
 *
 * @example
 * query {
 *   git { revision }
 * }
 */

export const createResolvers = ({ createResolvers }: CreateResolversArgs) => {
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

export const sourceNodes = ({ actions }: SourceNodesArgs) => {
  actions.createTypes(`
    type GitMetadata implements Node {
      revision: String
    }
  `);
};
