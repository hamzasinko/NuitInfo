import React from 'react'
import { Box } from '@chakra-ui/react';
import Footer from './Footer';

function AppTemplate({children}) {
  const backgroundVid = '/backgroundVid.mp4';
return (
    <>
    <Box position="relative" padding="0" margin="0" height="100vh" width="100%" overflow="hidden">
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
            <Box position="relative" zIndex="1" color="black" padding="20px">
                    {children}
            </Box>
    </Box>
    <Box position="absolute" m={0} bottom="0" width="100%" zIndex="1" color="white" textAlign="center">
        <Footer/>
    </Box>
    </>
)
}

export default AppTemplate