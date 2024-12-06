import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const OrganDetails = ({ initialImages, newImages, description }) => {
    const [images, setImages] = useState(initialImages);
    const handleChangeImages = () => {
        images === initialImages ? setImages(newImages) : setImages(initialImages);
    };

    return (
        <Box width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box position="absolute" top="20px" right="20px">
                <Link to="/">
                    <Button bg="white" color="gray.800">
                        Home
                    </Button>
                </Link>
            </Box>
            <Box bg="gray.800" p={4} width="60%" borderRadius="40px">
                <Box display="flex" justifyContent="space-between" mb={4} mx="auto">
                    <img src={images[0]} alt="Image 1" style={{ width: '45%' }} />
                    <img src={images[1]} alt="Image 2" style={{ width: '45%' }} />
                </Box>
                <Button 
                    onClick={handleChangeImages} 
                    bg="white" 
                    color="gray.800" 
                    mt={4} 
                    p={4} 
                    display="block" 
                    mx="auto"
                >
                    Change Images
                </Button>
            </Box>
            <Box bg="gray.800" p={4} mt="10px" width="60%" borderRadius="40px">
                <Text textAlign="center" color="white">{description}</Text>
            </Box>
        </Box>
    );
};

export default OrganDetails;