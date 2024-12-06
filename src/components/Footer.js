import React from 'react';
import { Box, Text, Link, List, ListItem } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" p={4} bg="gray.800" color="white">
            <Box textAlign="center">
                <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
                <List styleType="none" display="flex" justifyContent="center" mt={2}>
                    <ListItem mx={2}>
                        <Link href="https://www.linkedin.com/in/hamza-fikri/" color="teal.200">Hamza Fikri</Link>
                    </ListItem>
                    <ListItem mx={2}>
                        <Link href="/contact" color="teal.200">Contact</Link>
                    </ListItem>
                    <ListItem mx={2}>
                        <Link href="/privacy" color="teal.200">Privacy Policy</Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Footer;