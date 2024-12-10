import { promisify } from 'util';
import { exec } from 'child_process';
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

export const createResolvers = (actions: CreateResolversArgs) => {
  actions.createResolvers({
    Query: {
      git: {
        async resolve() {
          const branch = 'HEAD';
          const { stdout } = await promisify(exec)(
            `git rev-parse --short ${branch}`,
          );

          return {
            id: branch,
            revision: stdout.toString().trim(),
          };
        },
      },
    },
  });
};

export const createSchemaCustomization = ({ actions }: SourceNodesArgs) => {
  actions.createTypes(`
    type Query {
      git: GitMetadata!
    }

    type GitMetadata {
      revision: String!
    }
  `);
};
