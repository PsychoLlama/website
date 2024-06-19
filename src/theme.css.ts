import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    background: '#1e1e1e',
    text: '#abb2bf',
    blue: '#61afef',
    red: '#e06c75',
    green: '#98c379',
    yellow: '#e5c07b',
    magenta: '#c678dd',
    cyan: '#56b6c2',
  },
});

globalStyle('body', {
  margin: 0,
  fontFamily: 'Fira Code Variable, monospace',
});

globalStyle('html', {
  backgroundColor: theme.color.background,
});
