import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box padding="20px" height="100vh" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
      
      {/* Box with Image on the left */}
      <Box flex="0 0 auto">
        <Image
          src="/body.png"
          alt="Placeholder Image"
          objectFit="contain"  // Maintains the original size and aspect ratio
          height="700px"        // Ensures the image height is proportional to the width
          width="300px"         // Keeps the original image dimensions
          borderRadius="md"
        />
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
          This is a paragraph inside a box with a background. You can customize the content here.
        </Text>
      </Box>
      
    </Box>
  );
}

export default Home;
