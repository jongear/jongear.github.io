import { lighten } from 'polished';

const colors = {
  primary: '#75A7C6',
  primaryLight: lighten(0.05, '#75A7C6'),
  //primary: '#DC602E', // Color for buttons or links
  //primaryLight: lighten(0.05, '#DC602E'),
  homepageCard: '#1C2426',
  primaryFontColor: '#ffecdb',
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
  white: 'white',
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.9rem',
};

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
};

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
};

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
};

export default theme;
