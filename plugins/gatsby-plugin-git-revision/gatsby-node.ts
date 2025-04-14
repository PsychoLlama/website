import { promisify } from 'util';
import { exec } from 'child_process';
import { GatsbyNode } from 'gatsby';

/**
 * @example
 * query {
 *   siteBuildMetadata {
 *     git { revision }
 *   }
 * }
 */

export const createResolvers: GatsbyNode['createResolvers'] = (actions) => {
  actions.createResolvers({
    SiteBuildMetadata: {
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

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(`
      type SiteBuildMetadata {
        git: GitRepositoryMetadata!
      }

      # Information about the git repo.
      type GitRepositoryMetadata {
        revision: String!
      }
  `);
  };
