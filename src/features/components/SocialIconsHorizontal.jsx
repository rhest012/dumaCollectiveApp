import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
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
    <Flex gap="1rem" paddingY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}>
        <Link isExternal href="https://www.instagram.com/dumacollective/">
            <Box className="social-icon-container" sx={socialIconContainerStyling} as="button" >
                <AiOutlineInstagram
                    className="social-icon"
                    color="#1E174B"
                    fontSize="1.25rem"
                />
            </Box>
        </Link>
        <Link isExternal href="https://twitter.com/DumaCollective/">
            <Box className="social-icon-container" sx={socialIconContainerStyling} as="button" >
                <AiOutlineTwitter
                    className="social-icon"
                    color="#1E174B"
                    fontSize="1.25rem"
                />
            </Box>
        </Link>
        <Link href="https://www.facebook.com/dumacollective/" isExternal>
            <Box className="social-icon-container" sx={socialIconContainerStyling} as="button" >
                <FaFacebookF
                    className="social-icon"
                    color="#1E174B"
                    fontSize="1.25rem"
                />
            </Box>
        </Link>
        <Link href="https://za.linkedin.com/company/dumacollective" isExternal>
            <Box className="social-icon-container" sx={socialIconContainerStyling} as="button" >
                <FaLinkedinIn
                    className="social-icon"
                    color="#1E174B"
                    fontSize="1.25rem"
                />
            </Box>
        </Link>
    </Flex>
  )
}

export default SocialIconsHorizontal