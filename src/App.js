import { ChakraProvider } from '@chakra-ui/react';
import AppTemplate from './components/AppTemplate';
import React from 'react';

function App() {
  return (
    <ChakraProvider>
      <AppTemplate>
        <h1>Welcome to the Chakra UI App</h1>
        <p>
          This is a simple Chakra UI app that uses the ChakraProvider to provide the Chakra UI theme to all components in the app.
        </p>
      </AppTemplate>
    </ChakraProvider>
  );
}

export default App;