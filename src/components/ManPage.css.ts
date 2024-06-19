import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const page = style({
  padding: '0.5rem 1rem',
  lineHeight: '1.4rem',
});

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  color: theme.color.green,
  paddingBottom: '1rem',
  fontSize: 'inherit',
  margin: 0,
  fontWeight: 'normal',

  selectors: {
    '&::before, &::after': {
      content: 'attr(data-section)',
      display: 'block',

      '@media': {
        'screen and (max-width: 640px)': {
          display: 'none',
        },
      },
    },
  },
});

export const subheading = style({
  color: theme.color.magenta,
  fontSize: 'inherit',
  fontWeight: 'normal',
  textTransform: 'uppercase',
  margin: 0,

  selectors: {
    '&:first-of-type': {
      marginTop: '2rem',
    },
  },
});

export const link = style({
  color: theme.color.yellow,
  textDecoration: 'none',

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const paragraph = style({
  color: theme.color.text,
  margin: 0,
  marginLeft: '4rem',
  marginBottom: '2rem',

  selectors: {
    '& + &': {
      marginTop: '1rem',
    },
  },

  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: '2rem',
    },
  },
});

export const list = style({
  color: theme.color.text,
  padding: 0,
  margin: 0,
  marginLeft: '4rem',
  marginBottom: '2rem',
  listStyleType: "'- '",

  selectors: {
    '& + &': {
      marginTop: '1rem',
    },
  },

  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: '2rem',
      listStyleType: 'none',
    },
  },
});

export const listItem = style({
  marginLeft: '1rem',

  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: 0,
      marginBottom: '1rem',
    },
  },
});

export const divider = style({
  margin: '2rem 4rem',
  border: `1px dashed ${theme.color.text}`,
});

export const code = style({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: theme.color.blue,
  padding: '0.1rem 0.2rem',
  borderRadius: '0.2rem',
  fontFamily: 'inherit',
});

export const dl = style({
  margin: '2rem 4rem',
  marginRight: 0,
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  gridColumnGap: '4rem',
  gridRowGap: '1rem',

  '@media': {
    'screen and (max-width: 640px)': {
      marginLeft: '2rem',
      gridTemplateColumns: '1fr',
    },
  },
});

export const dt = style({
  color: theme.color.cyan,

  selectors: {
    '&::before': {
      content: "'--'",
    },
  },
});

export const dd = style({
  margin: 0,
  maxWidth: '50rem',

  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '2rem',
    },
  },
});
