import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import HomeHeaderBackground from '../../assets/headers/africa image.png'
import africaOutline from '../../assets/headers/Duma_Africa_outline.png'
import { motion } from "framer-motion"
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SocialIconsHorizontal from './SocialIconsHorizontal'

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
    height={{ base:"auto", sm:"auto", md:"auto", lg:"90vh", xl:"90vh" }}
    gridTemplateColumns={{ base:"1fr", sm:"1fr", md:"1fr", lg:"70%, 30%", xl:"70% 30%" }}
    width="100vw" 
    paddingY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
    paddingX="2rem"
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
            marginY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
          >
            Our collaborative work environment fosters a culture of innovation, allowing our team to constantly inspire and elevate one another, From brainstorming sessions to meticulous attention to detail, our creative staff thrives on turning ideas into captivating realities.
          </Text>
          <SocialIconsHorizontal/>
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
            height={{ base:"550px", base:"550px", md:"550px", lg:"700px", xl:"700px" }}
            width={{ base:"321px", sm:"321px", md:"321px", lg:"409px",  xl:"409px" }}
            layoutId= "africa-image"
            paddingTop={{ base:"1rem", sm:"1rem", md:"1rem", lg:"0px",  xl:"0xp" }}
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