import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { SlSocialFacebook } from 'react-icons/sl'
import React from 'react'
import JffBackground from '../../../assets/theGrind/jff/jff-background.png'
import JffInstaCard from '../components/JffInstaCard'
import JFFSwiper from '../components/JFFSwiper'
import JffHeader from '../../../assets/theGrind/jff/JFF_Header.png'

const Jff = () => {
    const singleAnnualSocialStyle = {
        fontFamily: "Fira Condensed",
        width: "100%", 
        borderRadius: "2rem", 
        px: "1.5rem", 
        py: "1rem",
    }
    

    const AnnualSocialStyle = { 
        fontSize: "1.25rem",
        lineHeight: "1.6rem",  
        textTransform:'uppercase',
        color:'#fff',
        fontWeight: '300'
    }

    const statDescriptionStyle = {
        fontFamily: "Fira Sans Condensed",
        textAlign:"center", 
        textTransform:'uppercase'
    }

  return (
   <>
    <Box marginTop="1rem">
        <Heading 
            variant="h1" 
            as="h1"
            textAlign="center"
        >
            JFF Case Study
        </Heading>
    </Box>
    <Box 
        marginTop="1rem"
        marginBottom="4rem"
        backgroundImage={JffHeader}
        height="92vh"
        backgroundSize="cover"
        backgroundPosition="center"
    />
    <JFFSwiper/>
    <Flex gap="12rem" justifyContent="center" alignItems="center" my="4rem" mx="4rem">
    <Box  backgroundImage= {JffBackground} sx={singleAnnualSocialStyle}>
        <Flex justifyContent="space-between" alignItems="center">
            <Heading sx={AnnualSocialStyle}>Instagram<br />Yearly<br /> Report</Heading>
            <AiOutlineInstagram color= "#FFFFFF" fontSize="4rem" textAlign="right"/>
        </Flex>
    </Box>
    <Box  backgroundImage= {JffBackground} sx={singleAnnualSocialStyle}>
        <Flex justifyContent="space-between" alignItems="center">
            <Heading sx={AnnualSocialStyle}>Twitter<br />Yearly<br /> Report</Heading>
            <CiTwitter color= "#FFFFFF" fontSize="4rem"/>
        </Flex>
    </Box>
    <Box  backgroundImage= {JffBackground} sx={singleAnnualSocialStyle}>
    <Flex justifyContent="space-between" alignItems="center">
            <Heading sx={AnnualSocialStyle}>Facebook<br />Yearly<br /> Report</Heading>
            <SlSocialFacebook color= "#FFFFFF" fontSize="4rem"/>
        </Flex>
    </Box>
    </Flex>

    <JffInstaCard/>
   </>
  )
}

export default Jff