import { ThemeProvider } from 'styled-components';
import React from 'react';
import './global.css';

export default function Theme({ element }) {
  return <ThemeProvider theme={oneDark}>{element}</ThemeProvider>;
}

const oneDark = {
  colors: {
    background: '#1e1e1e',
    text: '#abb2bf',
    blue: '#61afef',
    red: '#e06c75',
    green: '#98c379',
    yellow: '#e5c07b',
    magenta: '#c678dd',
    cyan: '#56b6c2',
  },
};
