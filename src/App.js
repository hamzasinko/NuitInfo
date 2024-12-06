import { ChakraProvider } from '@chakra-ui/react';
import AppTemplate from './components/AppTemplate';
import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <AppTemplate>
        <Home/>
      </AppTemplate>
    </ChakraProvider>
  );
}

export default App;