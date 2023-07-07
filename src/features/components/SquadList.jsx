import React, { useState } from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useFetchFirebase } from '../../actions/useFetchFirebase'


import { easeIn, motion } from 'framer-motion'
import useFetch from '../../actions/useFetchData'

const SquadList = () => {
  const containerStyle = {
    height:{ base:"auto", sm:"auto", md:"auto", lg:"100vh", xl:"80vh"},
 
    marginX:"2rem"
  }

  const staffHeadingStyle = {
    textAlign: {base: "center", sm:"center", md:"left", lg:"left", xl:"left"}
  }

  const imageCaption = {
    textAlign : "center",
    pt: "0.25rem",
    pb: "0.5rem"
  }


   // Framer Motion
   const MotionFlex = motion(Flex);
   const MotionImage = motion(Image);

   const imageContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      } 
    },
  };
  
  const singleImageChildVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  
   
   // Fetch Data
   const data  = useFetchFirebase('staff');

   
   
 
 
  return (
    <>
    {data && (
      <Box sx={containerStyle}>
      <>
      </>
          <Grid
            marginY="2rem" 
            height={{ base:"auto", sm:"auto", md:"auto", lg:"100%", xl:"100%" }}
            alignContent="center" 
            gridTemplateColumns={{ base:"1fr", sm:"1fr",  md:"1fr", lg:"40% 60%", xl:"40% 60%"}}
            overflow="hidden"
            gap="1rem"
          >
            <GridItem 
              className="staff-text-container"
              display="flex"
              flexDirection="column" 
              justifyContent="center" 
              flexWrap={{base:"wrap", sm:"wrap", md:"wrap", lg:"no-wrap", xl:"no-wrap"}}
              alignItems={{base: "center", sm:"center", md:"center", lg:"flex-start", xl:"flex-start"}}
              height="100%" 
              paddingLeft={{base:"0", sm:"0", md:"0", lg:"1.5rem", xl:"1.5rem"}}
              paddingTop={{base:"2rem", sm:"2rem", md:"2rem", lg:"0", xl:"0"}}
            >
              <Heading variant="h2">
                Meet the awesome people that make things happen
              </Heading>
              <Text marginY="2rem" variant="p">
                At Duma Collective, creativity is at the heart of everything we do. Our highly talented and passionate team of creative professional forms the backbone of our agency, bringing unparalleled vision and ingenuity to every project. With diverse backgrounds in design, copywriting, production, social media and more, our staff is a melting pot of artistic brilliance.
              </Text>
            </GridItem>
            <GridItem overflowY="scroll">
            {data.map((staff, index) => (
              <Box key={index} marginY="1rem" display="flex" flexDir="column" justifyContent="center">
                <Heading sx={staffHeadingStyle} variant="h2">
                  {staff.aka}
                </Heading>
                <Grid 
                  className="staff-image-container"  
                  gridTemplateColumns={{ base:"1fr", sm:"1fr", md:"repeat(3, 1fr)", lg:"repeat(2, 1fr)", xl:"repeat(3, 1fr)"}}
                  flexDir="row"
                  flexDirection="column"
                  width="100%"
                  justifyContent="center"
                >
                    {staff.staffMembers.map((staffMember, index) => {
                      return (
                        <>
                          <GridItem key={index}>
                            <Flex 
                              flexDirection="column"
                              className="staff-container"
                              width="auto"
                              variants={imageContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <MotionFlex
                                flexDirection={{base:"columm", sm:"column", md:"column", lg:"row", xl:"row"}}
                                justifyContent="center"
                                alignItems="center"
                                className="staff-container"
                                variants={imageContainerVariants}
                                initial="hidden"
                                animate="visible"
                              >
                              <MotionImage
                                className="staff__image"
                                key={index}
                                src={require(`../../assets/squad/squadOri/${staffMember.image}`)}
                                borderRadius="1rem"
                                w="239px"
                                h="181px"
                                boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                // box-shadow: ;
                                transition="all  0.7s ease"
                                variants={singleImageChildVariants}
                                initial="hidden"
                                animate="visible"
                                _hover={{
                                  content: `url(${require(`../../assets/squad/squadHover/${staffMember.image}`)})`,
                                  w:"239px",
                                  h:"181px",
                                }}
                              />
                            </MotionFlex>
                              <Text 
                                className="staff__text"
                                sx={imageCaption}
                              >
                                {staffMember.aka}
                              </Text>
                            </Flex>
                          </GridItem>
                        </>
                    )})}  
                </Grid>
                <Heading padding="2rem 0 2rem 1rem" variant="h5"  sx={staffHeadingStyle}>
                  {staff.quote}
                </Heading>
              </Box>
            ))}
            </GridItem>
          </Grid>
      
      </Box>
    )}
    </>
      
  )
}

export default SquadList