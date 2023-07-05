import React from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialIconsHorizontal = () => {
    const socialIconContainerStyling = {
        border:"1px solid #1E174B",
        padding:"0.5rem", 
        borderRadius:"50%",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }
  return (
    <Flex gap="1rem" paddingY="2rem">
        <Box sx={socialIconContainerStyling} as="button" >
            <AiOutlineInstagram
                color="#1E174B"
                fontSize="1.25rem"
            />
        </Box>
        <Box sx={socialIconContainerStyling} as="button" >
            <AiOutlineTwitter
                color="#1E174B"
                fontSize="1.25rem"
            />
        </Box>
        <Box sx={socialIconContainerStyling} as="button" >
            <FaFacebookF
                color="#1E174B"
                fontSize="1.25rem"
            />
        </Box>
        <Box sx={socialIconContainerStyling} as="button" >
            <FaLinkedinIn
                color="#1E174B"
                fontSize="1.25rem"
            />
        </Box>
    </Flex>
  )
}

export default SocialIconsHorizontal