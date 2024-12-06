import React from 'react';
import { Box, Text, Link, List, ListItem } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" p={4} bg="gray.800" color="white">
            <Box textAlign="center">
                <Text>&copy; {new Date().getFullYear()} AtlasDevs. All rights reserved.</Text>
                 
            </Box>
        </Box>
    );
};

export default Footer;