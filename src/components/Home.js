import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  const [text, setText] = useState("L’océan, source de vie et de mystères, est à la fois le berceau de l’humanité et le miroir de son avenir.");

  return (
    
    <Box padding="20px" height="100vh" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
      
      {/* Box with Image on the left */}
      <Box flex="0 0 auto" position="relative">
        <Image
          src="/body.png"
          alt="Placeholder Image"
          objectFit="contain"  // Maintains the original size and aspect ratio
          height="700px"        // Ensures the image height is proportional to the width
          width="300px"         // Keeps the original image dimensions
          borderRadius="md"
        />
         <Box position="absolute"
          top="40%"
          left="53%"
          transform="translate(-50%, -50%)"
          zIndex="2"
          height="220px"        // Ensures the image height is proportional to the width
           width="220px"    
        >
          <Link to="/digest">
            <Image
              src="/digest.webp"
              alt="Placeholder Image"
              objectFit="contain"  // Maintains the original size and aspect ratio
              height="100%"        // Ensures the image height is proportional to the width
              width="100%"         // Keeps the original image dimensions
              borderRadius="md"
              opacity="0.5"
              _hover={{ opacity: "1" }}
              onMouseEnter={() => setText("Système digestif : Tout comme les océans, le système digestif agit comme un purificateur en transformant et en filtrant les substances ingérées pour extraire les nutriments essentiels et éliminer les déchets. Cependant, lorsqu'il est submergé par des toxines ou des excès, comme les océans avec les plastiques et les polluants, son équilibre est perturbé, affectant sa capacité à remplir ses fonctions vitales.")}
              onMouseLeave={() => setText("L’océan, source de vie et de mystères, est à la fois le berceau de l’humanité et le miroir de son avenir.")}
            />
          </Link>
        </Box>
        <Box position="absolute"
          top="5%"
          left="49%"
          transform="translate(-50%, -50%)"
          zIndex="2"
        >
          <Link to="/brain">
            <Image
              src="/brain.png"
              alt="Placeholder Image"
              objectFit="contain"  // Maintains the original size and aspect ratio
              height="110px"        // Ensures the image height is proportional to the width
              width="110px"         // Keeps the original image dimensions
              borderRadius="md"
              opacity="0.5"
              _hover={{ opacity: "1" }}
              onMouseEnter={() => setText("Circulation Océanique : Les courants marins, à l'image des impulsions nerveuses envoyées par le cerveau, déplacent la chaleur et les nutriments à travers les océans, influençant les climats et les écosystèmes mondiaux. Les courants océaniques sont un moyen par lequel les océans 'communiquent' avec l'atmosphère et les terres.")}
              onMouseLeave={() => setText("L’océan, source de vie et de mystères, est à la fois le berceau de l’humanité et le miroir de son avenir.")}
            />
          </Link>
        </Box>
        <Box position="absolute"
          top="23%"
          left="49%"
          transform="translate(-50%, -50%)"
          zIndex="2"
          width="230px" 
        >
          <Link to="/lungs">
            <Image
              src="/lungs.png"
              alt="Placeholder Image"
              // Maintains the original size and aspect ratio
              height="150px"        // Ensures the image height is proportional to the width
              width="100%"         // Keeps the original image dimensions
              borderRadius="md"
              opacity="0.5"
              _hover={{ opacity: "1" }}
              onMouseEnter={() => setText("Système océanique : Les océans jouent un rôle crucial dans la production d'oxygène, principalement grâce au phytoplancton qui effectue la photosynthèse. En effet, environ 50 à 80 % de l'oxygène que nous respirons provient des océans. Ces micro-organismes, tout comme les plantes terrestres, utilisent l'énergie solaire pour transformer le dioxyde de carbone et libérer de l'oxygène, alimentant ainsi à la fois la faune marine et l'atmosphère.")}
              onMouseLeave={() => setText("L’océan, source de vie et de mystères, est à la fois le berceau de l’humanité et le miroir de son avenir.")}
            />
          </Link>
        </Box>
        <Box position="absolute"
          top="25%"
          left="53%"
          transform="translate(-50%, -50%)"
          zIndex="2"
        >
          <Link to="/heart">
            <Image
              src="/heart.png"
              alt="Placeholder Image"
              objectFit="contain"  // Maintains the original size and aspect ratio
              height="100px"        // Ensures the image height is proportional to the width
              width="100px"         // Keeps the original image dimensions
              borderRadius="md"
              opacity="0.5"
              _hover={{ opacity: "1" }}
              onMouseEnter={() => setText("Système océanique : Les courants marins agissent comme le cœur des océans. Ils régulent la circulation des eaux chaudes et froides autour de la planète, transportant des nutriments essentiels pour les écosystèmes marins et influençant les conditions climatiques mondiales. Par exemple, le Gulf Stream transporte des eaux chaudes des tropiques vers le nord de l'Atlantique, affectant ainsi le climat de l'Europe de l'Ouest.")}
              onMouseLeave={() => setText("L’océan, source de vie et de mystères, est à la fois le berceau de l’humanité et le miroir de son avenir.")}
            />
          </Link>
        </Box>
       
      </Box>
      
      {/* Box with Paragraph and background */}
      <Box 
        flex="1"  // Makes sure the paragraph box takes up the remaining space
        backgroundColor="gray.800" 
        color="white" 
        padding="20px" 
        borderRadius="md" 
        marginLeft="20px"  // Adds space between the two boxes
      >
        <Text fontSize="xl">
          {text}
        </Text>
      </Box>
      
    </Box>
  );
}

export default Home;