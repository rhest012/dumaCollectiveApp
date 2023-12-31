import React from 'react'
import { Box, Button, Flex, Grid, GridItem, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialIcons = () => {
    const socialIconContainerStyling = {
        border:"1px solid #1E174B",
        padding:"0.5rem", 
        borderRadius:"50%",
        width:"30px",
        height:"30px",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }

    const socialIconInlineContainerStyling = {
        gap:"1rem"
    }
  return (
    <>
        <Flex flexDir="column" gap="0.5rem">
            <HStack sx={socialIconInlineContainerStyling}>
                <Box sx={socialIconContainerStyling} as="button" >
                    <AiOutlineInstagram
                        color="#1E174B"
                        fontSize="1.5rem"
                    />
                </Box>
                <Text variant="p">
                    Instagram
                </Text>
            </HStack>
            <HStack sx={socialIconInlineContainerStyling}>
                <Box sx={socialIconContainerStyling} as="button" >
                    <AiOutlineTwitter
                        color="#1E174B"
                        fontSize="1.5rem"
                    />
                </Box>
                <Text variant="p">
                    Twitter
                </Text>
            </HStack>
            <HStack sx={socialIconInlineContainerStyling}>
                <Box sx={socialIconContainerStyling} as="button" >
                    <FaFacebookF
                        color="#1E174B"
                        fontSize="1.5rem"
                    />
                </Box>
                <Text variant="p">
                    Facebook
                </Text>
            </HStack>
            <HStack sx={socialIconInlineContainerStyling}>
                <Box sx={socialIconContainerStyling} as="button" >
                    <FaLinkedinIn
                        color="#1E174B"
                        fontSize="1.5rem"
                    />
                </Box>
                <Text variant="p">
                    LinkedIn
                </Text>
            </HStack>
        </Flex>
    </>
  )
}

export default SocialIcons