import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import HomeHeaderBackground from '../../assets/headers/africa image.png'
import africaOutline from '../../assets/headers/Duma_Africa_outline.png'
import { motion } from "framer-motion"
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  const socialIconContainerStyling = {
    border:"1px solid #1E174B",
    padding:"0.5rem", 
    borderRadius:"100%"
  }
  
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
    <Grid 
    height="90vh"
    gridTemplateColumns="70% 30%" 
    width="100%" 
    padding="2rem"
    flexDir="row"
    alignItems="center"
    borderBottom="1px solid #1a202c"
    >
        <GridItem display="flex" flexDir="column" justifyContent="flex-end">
          <Heading 
            variant="h1"
          >
              Redefining creative communications from Africa to the world 
          </Heading>
          <Text
            variant="p"
            marginY="2rem"
          >
            Our collaborative work environment fosters a culture of innovation, allowing our team to constantly inspire and elevate one another, From brainstorming sessions to meticulous attention to detail, our creative staff thrives on turning ideas into captivating realities.
          </Text>
          <Flex gap="2rem" marginY="2rem">
            <Box sx={socialIconContainerStyling} as="button" >
              <AiOutlineInstagram
                  color="#1E174B"
                  fontSize="1.5rem"
              />
            </Box>
            <Box sx={socialIconContainerStyling} as="button" >
              <AiOutlineTwitter
                  color="#1E174B"
                  fontSize="1.5rem"
              />
            </Box>
            <Box sx={socialIconContainerStyling} as="button" >
              <FaFacebookF
                  color="#1E174B"
                  fontSize="1.5rem"
              />
            </Box>
            <Box sx={socialIconContainerStyling} as="button" >
              <FaLinkedinIn
                color="#1E174B"
                fontSize="1.5rem"
              />
            </Box>
          </Flex>
          <Link  to="/get-in-touch">
            <Button 
             variant="standardButton"
            >
              Get In Touch
            </Button>
          </Link>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <MotionImage
            src={HomeHeaderBackground}
            height="700px"
            width="409px"
            layoutId= "africa-image"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
            transition={{ ease: "linear", duration: 1.6 }}
          />
        </GridItem>
    </Grid>
  )
}

export default HomeHeader