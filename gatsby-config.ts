import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-git-revision',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/vim-gutter-symbol.svg',
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
