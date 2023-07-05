import { Box, Flex, Heading, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react'
// Icons
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Links } from '../styles/Navbar.style';
import SocialIcons from '../features/components/SocialIcons';

const Footer = () => {

  return (
    <Box background="brand.900" width="100%">
      <Text variant="p" paddingY="1rem" color="#fff" textAlign="center">
        &copy; {new Date().getFullYear()} Duma Collective. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer