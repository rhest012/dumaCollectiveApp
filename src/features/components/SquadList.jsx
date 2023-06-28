import React, { useState } from 'react'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useFetchFirebase } from '../../actions/useFetchFirebase'


import { easeIn, motion } from 'framer-motion'

const SquadList = () => {
  const containerStyle = {
    height:{ base:"auto", sm:"auto", md:"auto", lg:"100vh", xl:"100vh"},
    paddingY:"4rem", 
    marginX:"2rem"
  }

  const staffHeadingStyle = {
    textAlign: {base: "center", sm:"center", md:"left", lg:"left", xl:"left"}
  }

  const subHeadingStyle = {
    color:"brand.900", 
    textAlign: "left",
  }

  const linkContainerStyling = {
    justifyContent:"space-between", 
    paddingY:"1rem", 
    alignItems:"center",
    flexDirection: {base: "column", sm:"column", md:"column", lg:"row", xl:"row"}
  }

  const buttonStyle = {
    color:"#fff",
    background:"transparent",
    color: "brand.900",
    paddingY:"1.25rem",
    textTransform:"uppercase",
    fontSize: "1rem",
    fontfamily: "'Roc Grotesk Wide', sans-serif",
    fontWeight: "600",
    colorScheme: "none",

    _hover: {
      background:"#transparent",
    }
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
   
   // Filter squad departments
   const [currentDepartment, setCurrentDepartment] = useState("Public Relations");
 
   const handleDepartmentChange = (department) => {
     setCurrentDepartment(department);
   };
 
   const filteredSquad = currentDepartment === "all"
   ? data
   : data.filter(item => item.department === currentDepartment);
 
 
  return (
    <>
    {data && (
      <Box sx={containerStyle}>
      <Box borderTop="1px solid #1E174B"/>
      <MotionFlex 
        sx={linkContainerStyling}
        // variants={imageContainerVariants}
        // initial="hidden"
        // animate="visible"
      >
      {data.map((staff, index) => (
        <Button colorScheme="none" key={index}  sx={buttonStyle} onClick={() => handleDepartmentChange(`${staff.department}`)}>
          {staff.department}
        </Button>
      ))}
      </MotionFlex>
      <Box borderTop="1px solid #1E174B"/>
      <>
      </>
        {filteredSquad && filteredSquad.map((staff, index) => (
          <Grid 
            key={index}  
            marginY="2rem" 
            height={{ base:"auto", sm:"auto", md:"auto", lg:"100%", xl:"100%" }}
            alignContent="center" 
            gridTemplateColumns={{ base:"1fr", sm:"1fr",  md:"1fr", lg:"60% 40%", xl:"60% 40%"}}
          >
            <GridItem>
              <Grid 
                className="staff-image-container"  
                key={index} 
                gridTemplateColumns={{ base:"repeat(2, 1fr)", sm:"1fr", md:"1fr", lg:"repeat(3, 1fr)", xl:"repeat(3, 1fr)"}}
                display={{ base:"flex", sm:"flex", md:"flex", lg:"grid", xl:"grid"}}
                flexDirection="column"
                width="100%"
                justifyContent="center"
              >
                  {staff.staffMembers.map((staffMember, index) => {
                    return (
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
                  )})}  
              </Grid>
            </GridItem>
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
              <Text fontSize="1.56rem"  sx={staffHeadingStyle} paddingBottom="2rem">
                {staff.quote}
              </Text>
              <Heading sx={staffHeadingStyle} variant="h2">
                  {staff.aka}
              </Heading>
              <Text sx={staffHeadingStyle} variant="p">
                {staff.department}
              </Text>
            </GridItem>
          </Grid>
        ))}
      </Box>
    )}
    </>
      
  )
}

export default SquadList