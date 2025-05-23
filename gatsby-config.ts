import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://psychollama.io',
  },
  graphqlTypegen: {
    generateOnBuild: true,
  },
  plugins: [
    'gatsby-plugin-git-revision',
    'gatsby-plugin-vanilla-extract',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon.png',

        // Copied from `theme.colors.background`.
        background_color: '#1e1e1e',
      },
    },
  ],
};

export default config;
