import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import PortraitImage from '../../../assets/bodyImages/DumaImage02.jpg'
import LandscapeImage from '../../../assets/bodyImages/DumaImage01.jpg'


const PageIntro = ( {pageLocation} ) => {
  const imageStyling = {
    borderRadius : "0.5rem"
  }

// Framer Motion
  const MotionText = motion(Text);

  const textVariants = {
    hidden: {
      // x: -500,
      opacity: 0,
      transition: {duration: 1.5}
    },
    visible: {
      // x: 0,
      opacity: 1,
      transition: {duration: 2, delay: 4}
    }
  } 

    const pageContent = [
        {
          url: '/what-we-do',
          description: "We let brands come alive through creative ideation and insights. With a wide range of clients, from FMCG to government departments to Technology and Enterprise Development, we drive business growth through collaborative thinking and excellence in service. As a flourishing oasis for African Creativity, we deliver impactful solutions that make a difference. <br/><br/> Join us in redefining excellence together."
        },
        {
          url: '/the-grind',
          description: "From renowned global FMCG leaders and ground-breaking tech innovators to progressive government entities and sustainability pioneers, our portfolio reflects our unwavering dedication and expertise. Immerse yourself in the diverse range of projects we've undertaken, each showcasing our commitment to delivering outstanding results."
        },
        {
          url: '/the-squad',
          description: "This is where the magic truly happens. The Dumarians are not your ordinary group of individuals. We’re the dreamers, the strategists, the trendsetters and the coffee-fuelled enthusiasts who bring an extra dash of sparkle to everything we do.<br/><br/> With a fusion of creativity, expertise, and a pinch of quirkiness, we embark on epic adventures in brand-building. These behind the scenes personalities come with their own superpowers, ready to ignite your brand and propel your business to new heights. <br/><br/> Extraordinary is just another day at the office!"
        },
      ]
    
      const activePage = pageContent.find((pageContent) => pageContent.url === pageLocation);
    
  return (
    <Grid
        marginX="2rem"
        marginY="6rem"
        gridTemplateColumns="1fr 1fr"
        gap="1rem"
      >
        <GridItem
          display="flex"
          justifyContent="space-between"
        >
          <Image
              height="300px"
              src={PortraitImage}
              sx={imageStyling}
          />
          <Image
              height="300px"
              src={LandscapeImage}
              sx={imageStyling}
          />
        </GridItem>
        <GridItem 
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MotionText 
            variant="p" 
            as="p" 
            textAlign="left" 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit= 'exit'
            dangerouslySetInnerHTML={{ __html: activePage.description }}
          >
            {/* {activePage.description} */}
          </MotionText>
        </GridItem>
      </Grid>
  )
}

export default PageIntro