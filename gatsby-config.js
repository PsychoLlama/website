/* eslint-env node */
module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/vim-gutter-symbol.svg',
      },
    },
    'gatsby-transformer-remark',
  ],
};
