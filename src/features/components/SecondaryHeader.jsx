import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import WhatWeDoHeaderBg from '../../assets/headers/What-We-Do-header.jpg'
import africaImage from '../../assets/headers/Duma_Africa.png'
import africaOutline from '../../assets/headers/Duma_Africa_outline.png'
import React from 'react'
import { motion } from 'framer-motion'

const secondaryHeader = ({ pageLocation }) => {
  ;
  // Component Content
  const headerContent = [
    {
      name: "What We Do",
      url: '/what-we-do',
      description: "Let us help you breathe life into your campaigns. <br/><br/>Our expertise spans across branding and creative strategy, PR, social media management, influencer marketing, event planning, production, and talent acquisition. With our dedicated team, we can ensure your vision becomes a captivating reality.",
      imageUrl:"Duma_Africa.png"
    },
    {
      name: "The Grind",
      url: '/the-grind',
      description: "Our expertise spans across branding and creative strategy, PR, social media management, influencer marketing, event planning, production, and talent acquisition",
      imageUrl:"Duma_Africa.png"
    },
    {
      name: "The Squad",
      url: '/the-squad',
      description: "Our expertise spans across branding and creative strategy, PR, social media management, influencer marketing, event planning, production, and talent acquisition",
      imageUrl:"Duma_Africa.png"
    },
    {
      name: "The Buzz",
      url: '/the-buzz',
      description: "Our expertise spans across branding and creative strategy, PR, social media management, influencer marketing, event planning, production, and talent acquisition",
      imageUrl:"Duma_Africa.png"
    },
    {
      name: "Get In Touch",
      url: '/get-in-touch',
      description: "Ready to make things happen? Whether you have a burning question, a brilliant idea, or a desire to collaborate, we're here to listen, connect, and transform your vision into reality. Reach out to us today and get your game face on for an exciting journey.",
      imageUrl:"Duma_Africa.png"
    },
  ]
  const activePage = headerContent.find((headerContent) => headerContent.url === pageLocation)

  
  // const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);

  const headerVariants = {
    hidden: {
      x: -500,
      opacity: 0,
      // transition: {duration: 2.2}
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 2.2}
    }
  } 

  const textVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
      transition: {duration: 2.5, delay: 0.5}
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 3.5}
    }
  } 
  
  const imageVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 1, delay: 2.5}
    }
  }

  const outlineVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 10,
      opacity: 1,
      transition: {duration: 1, delay: 2.5}
    }
  }

  return (
      <Flex 
      width="100vw" 
      height="450px"
      padding="2rem"
      flexWrap="wrap"
      justifyContent="flex-end"
      borderBottom="1px solid #1a202c"
      overflow="hidden"
    >
        <Box width="50%" className="header-container_left">
          <MotionHeading 
            variant="h1"
            width="60%"
            marginBottom="3rem"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
          >
            {activePage.name}
          </MotionHeading>
          <MotionText 
            variants={textVariants}
            // paddingLeft="60%"
            variant="p"
            initial="hidden"
            animate="visible"
            exit= 'exit'
        >
          {activePage.description}
        </MotionText>
        </Box>
        <Box width="50%" className="header-container_right">
          <MotionImage
            src={africaImage}
            zIndex="-1"
            height="500px"
            position="absolute"
            left="800"
            top="3"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'

          />
          <MotionImage
            src={africaOutline}
            position="absolute"
            zIndex="-2"
            height="500px"
            left="780"
            top="5"
            variants={outlineVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
          />
        </Box>
        
    </Flex>
  )
}

export default secondaryHeader