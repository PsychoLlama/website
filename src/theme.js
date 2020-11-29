import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

export default function Theme({ element }) {
  return (
    <ThemeProvider theme={oneDark}>
      <>
        <GlobalStyleResets />
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
  }
`;
