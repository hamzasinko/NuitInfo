import React from 'react'
import { Box,DrawerOverlay,
  Stack,
  Menu,
  DrawerCloseButton,
  Drawer,
  IconButton,
  DrawerContent,
  useDisclosure,
  DrawerHeader } from '@chakra-ui/react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaBars} from "react-icons/fa"


function AppTemplate({children}) {
  const backgroundVid = '/backgroundVid.mp4';
  const {isOpen, onOpen, onClose } = useDisclosure();
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
      <IconButton
          size="md"
          icon={<FaBars style={{ margin: 'auto' }} />}
          aria-label="Open Menu"
          onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="start" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerCloseButton />
          <Stack p={4} spacing={4}>
            <Link
              to="/"
              onClick={onClose}
              color="#007BFF"
            >
              Home
            </Link>
            <Link
              to="/brain"
              onClick={onClose}
              color="#007BFF"
            >
              brain
            </Link>
            <Link
              to="/lungs"
              onClick={onClose}
              color="#007BFF"
            >
              lungs
            </Link>
            <Link
              to="/heart"
              onClick={onClose}
              color="#007BFF"
            >
              heart
            </Link>
            <Link
              to="/digest"
              onClick={onClose}
              color="#007BFF"
            >
              digest
            </Link>
            <Link
              to="/podcast"
              onClick={onClose}
              color="#007BFF"
            >
              podcast
            </Link>
            <Menu>
            </Menu>
          </Stack>
        </DrawerContent>
      </Drawer>
        {children}
      </Box>
      <Box position="relative" m={0} bottom="0" width="100%" zIndex="1" color="white" textAlign="center">
        <Footer/>
      </Box>
    </Box>
  )
}

export default AppTemplate