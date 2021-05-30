import { ThemeProvider } from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import favicon from './favicon.ico';
import './global.css';

export default function Theme({ element }) {
  return (
    <ThemeProvider theme={oneDark}>
      <>
        <Helmet>
          <link rel="icon" type="image/png" href={favicon} />
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
    yellow: '#e5c07b',
    magenta: '#c678dd',
    cyan: '#56b6c2',
  },
};
