import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const container = style({
  padding: '1rem 2rem',
});

export const headers = style({
  margin: 0,
  lineHeight: '1.4rem',
});

export const redHighlight = style({
  color: theme.color.red,
});

export const body = style({
  whiteSpace: 'pre',
});
