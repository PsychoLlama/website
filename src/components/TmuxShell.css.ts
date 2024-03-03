import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const container = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: theme.color.text,
  fontSize: '16px',
});

export const navigation = style({
  padding: '0.5rem',
  color: theme.color.green,
  display: 'flex',
  position: 'sticky',
  bottom: 0,
  backgroundColor: theme.color.background,
});

export const navItem = style({
  margin: '0 1ch',

  '::before': {
    content: 'counter(nav-link) ":"',
    counterIncrement: 'nav-link',
  },

  selectors: {
    '&[data-active="true"]': {
      marginRight: 0,
    },

    '&[data-active="true"]::after': {
      content: '"*"',
    },
  },
});

export const revision = style({
  margin: 0,

  '::before': {
    content: '[',
  },

  '::after': {
    content: ']',
  },

  '@media': {
    'screen and (max-width: 640px)': {
      display: 'none',
    },
  },
});

export const navLink = style({
  cursor: 'pointer',
  borderBottom: '1px solid transparent',
  color: 'inherit',
  textDecoration: 'none',

  selectors: {
    '&:hover, &:focus': {
      color: theme.color.text,
    },
  },
});

export const links = style({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  display: 'flex',
  counterSet: 'nav-link 0',
});

export const githubLink = style({
  cursor: 'pointer',
  borderBottom: '1px solid transparent',
  color: 'inherit',
  textDecoration: 'none',

  selectors: {
    '&:hover, &:focus': {
      color: theme.color.text,
      borderBottomColor: theme.color.text,
    },
  },
});
