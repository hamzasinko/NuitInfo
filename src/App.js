import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import React from 'react';
import Home from './components/Home';
import OrganDetails from './components/OrganDetails';
import Podcast from './components/Podcast';

const details = {
  brain: {
    initialImages: ["/brain.png", "/brain.png"],
    newImages: ["/heart.png", "/heart.png"],
    description: "Circulation Océanique : Les courants marins, à l'image des impulsions nerveuses envoyées par le cerveau, déplacent la chaleur et les nutriments à travers les océans, influençant les climats et les écosystèmes mondiaux. Les courants océaniques sont un moyen par lequel les océans 'communiquent' avec l'atmosphère et les terres."
  },
  lungs: {
    initialImages: ["/lungs.png", "/lungs.png"],
    newImages: ["/heart.png", "/heart.png"],
    description: "Système océanique : Les océans jouent un rôle crucial dans la production d'oxygène, principalement grâce au phytoplancton qui effectue la photosynthèse. En effet, environ 50 à 80 % de l'oxygène que nous respirons provient des océans. Ces micro-organismes, tout comme les plantes terrestres, utilisent l'énergie solaire pour transformer le dioxyde de carbone et libérer de l'oxygène, alimentant ainsi à la fois la faune marine et l'atmosphère."
  },
  heart: {
    initialImages: ["/heart.png", "/heart.png"],
    newImages: ["/brain.png", "/brain.png"],
    description: "Circulation Océanique : Les courants marins, à l'image des impulsions nerveuses envoyées par le cerveau, déplacent la chaleur et les nutriments à travers les océans, influençant les climats et les écosystèmes mondiaux. Les courants océaniques sont un moyen par lequel les océans 'communiquent' avec l'atmosphère et les terres."
  },
  digest: {
    initialImages: ["/digest.webp", "/heart.png"],
    newImages: ["/digestmal.webp", "/brain.png"],
    description: "Circulation Océanique : Les courants marins, à l'image des impulsions nerveuses envoyées par le cerveau, déplacent la chaleur et les nutriments à travers les océans, influençant les climats et les écosystèmes mondiaux. Les courants océaniques sont un moyen par lequel les océans 'communiquent' avec l'atmosphère et les terres."
  }
};

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppTemplate>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/podcast" element={<Podcast />} />
            {Object.keys(details).map((organ) => (
              <Route
                key={organ}
                path={`/${organ}`}
                element={<OrganDetails {...details[organ]} />}
              />
            ))}
          </Routes>
        </AppTemplate>
      </Router>
    </ChakraProvider>
  );
}

export default App;