import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../theme';

const Providers = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
     {children}
    </ChakraProvider>
  );
};

export { Providers };
