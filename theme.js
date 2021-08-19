import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1400px'
});

const colors = {
  brand: {
    main: '#2D912D',
    blue: '#195ED2',
    light: '#A3A3A3',
    lightBlue: '#3FB0E2',
    black: '#242424',
    green: '#EEFFEE',
    red: '#E70000',
    yellow: '#E7B500',
    orange: '#E76100',
    gray: '#696969'
  }
};

const styles = {
  global: {
    html: {
      fontSize: '62.5%',
      boxSizing: 'border-box'
    },
    body: {
      fontSize: '1.6rem',
      fontFamily: "'DM Sans', sans-serif;",
      color: '#242424'
    },
    a: {
      color: '#242424'
    },
    '::placeholder': {
      color: '#A3A3A3'
    }
  }
};

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
