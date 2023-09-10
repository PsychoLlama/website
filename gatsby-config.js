/* eslint-env node */
module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-git-revision',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/vim-gutter-symbol.svg',
      },
    },
    'gatsby-transformer-remark',
  ],
};
