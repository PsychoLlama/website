import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';

export default function Theme({ element }) {
  return (
    <ThemeProvider theme={oneDark}>
      <>
        <GlobalStyleResets />
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
          />
        </Helmet>
        {element}
      </>
    </ThemeProvider>
  );
}

const oneDark = {
  colors: {
    background: '#282c34',
    text: '#abb2bf',
    blue: '#61afef',
    red: '#e06c75',
    green: '#98c379',
  },
};

const GlobalStyleResets = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.colors.background};
  }

  body {
    margin: 0;
    font-family: Hack, monospace;
  }
`;
