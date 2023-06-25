import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import HomeHeaderBackground from '../../assets/headers/home-header.png'
import africaOutline from '../../assets/headers/Duma_Africa_outline.png'
import { motion } from "framer-motion"

const HomeHeader = () => {
  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);

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
    visible: {
      y: 0,
      transition: {ease: [0.6, 0.01, -0.05, 0.9], duration: 2}
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
    height="90vh" 
    width="100%" 
    padding="2rem"
    flexDir="row"
    alignItems="center"
    borderBottom="1px solid #1a202c"
    >
        <Box width="65%">
          <Heading 
            variant="h1"
            marginBottom="3rem"
          >
              Redefining creative communications from Africa to the world 
          </Heading>
          <Text
            variant="p"
          >
            Duma Collective in action from branding, and creative strategy to PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
          </Text>
        </Box>
        <Box width="35%" className="header-container__right">
          <MotionImage
            src={HomeHeaderBackground}
            layoutId= "africa-image"
            zIndex="-1"
            height="700px"
            position="absolute"
            left="770"
            top="90"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
            transition={{ease:[0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
          />
          <MotionImage
            src={africaOutline}
            position="absolute"
            zIndex="-2"
            height="650px"
            left="750"
            top="100"
            variants={outlineVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
          />
        </Box>
    </Flex>
  )
}

export default HomeHeader