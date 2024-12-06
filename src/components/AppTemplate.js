import React from 'react'
import { Box } from '@chakra-ui/react';
import Footer from './Footer';

function AppTemplate({children}) {
  const backgroundVid = '/backgroundVid.mp4';
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" width="100%" overflow="hidden">
      <Box
        as="video"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        autoPlay
        loop
        muted // Ensures the video is muted
      >
        <source src={backgroundVid} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box position="relative" flex="1" zIndex="1" color="black">
        {children}
      </Box>
      <Box position="relative" m={0} bottom="0" width="100%" zIndex="1" color="white" textAlign="center">
        <Footer/>
      </Box>
    </Box>
  )
}

export default AppTemplate