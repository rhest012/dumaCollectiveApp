import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// actions
import { useFetchFirebase } from '../../actions/useFetchFirebase'
import { useLocation } from 'react-router-dom'
import PageIntro from '../theGrind/components/pageIntro'
import SecondaryHeader from '../components/SecondaryHeader'

const Squad = () => {
  const headingStyle = {
    fontSize:"6xl", 
    color:"brand.900", 
    textTransform:"uppercase", 
    fontStyle:"700",
    textAlign: "left",
    letterSpacing: "wide",
    lineHeight: "70px"
  }

  const subHeadingStyle = {
    color:"brand.900", 
    textAlign: "left",
  }

  const preHeadingStyle = {
    fontfamily: "'Fira Sans', sans-serif",
    weight: "500",
    fontSize: "2.5rem",
    color:"brand.900", 
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "tighter",
    lineHeight: "10",
    pb: "10"
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

    _hover: {
      background:"#transparent",
    }

  }

  const imageCaption = {
    textAlign : "center",
    pt: "0.25rem",
    pb: "0.5rem"
  }

  // Page Location
  const location = useLocation();
  const pageLocation = location.pathname;

  // Framer Motion
  const MotionFlex = motion(Flex);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  const hoverVariants = {
      visible: {
        opacity: 0,
        transition: {duration: 1}
      },
      hover: {
        opacity: 1,
        transition: {duration: 1}
      } 
    }
  
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
      <Box>
        <SecondaryHeader pageLocation={pageLocation}/>
        <PageIntro pageLocation={pageLocation}/>
        <Box height="100vh" paddingY="4rem" marginX="2rem">
          <Box borderTop="1px solid #1E174B"/>
          <Flex justifyContent="space-between" paddingY="1rem" alignItems="center">
          {data.map((staff, index) => (
            <Button key={index}  sx={buttonStyle} onClick={() => handleDepartmentChange(`${staff.department}`)}>
              {staff.department}
            </Button>
          ))}
          </Flex>
          <Box borderTop="1px solid #1E174B"/>
          {filteredSquad.map((staff, index) => (
            <Grid key={index}  marginY="2rem" height="100%" alignContent="center" gridTemplateColumns="60% 40%">
              <GridItem>
                <Grid key={index} gridTemplateColumns="repeat(3, 1fr)">
                    {staff.staffMembers.map((staffMember, index) => {
                      return (
                        <GridItem key={index}>
                          <MotionFlex 
                            flexDirection="column"
                            className="staff-container"
                          >
                            <motionFlex gap="2rem">
                              <Image
                                borderRadius="1rem"
                                src={require(`../../assets/squad/squadOri/${staffMember.image}`)}
                                w="239px"
                                h="181px"
                                transition="all  0.7s ease"
                                _hover={{
                                  content: `url(${require(`../../assets/squad/squadHover/${staffMember.image}`)})`,
                                  w:"239px",
                                  h:"181px",
                                }}
                              />
                            </motionFlex>
                            <MotionText 
                              className="aka-text"
                              sx={imageCaption}
                              // variants={hoverVariants}
                              // animate="visible"
                              // whileHover="hover"
                            >
                              {staffMember.aka}
                            </MotionText>
                          </MotionFlex>
                        </GridItem>
                    )})}  
                </Grid>
              </GridItem>
              <GridItem >
                <Flex flexDir="column" justifyContent="center" height="100%" paddingLeft="1.5rem" lineHeight="50px">
                  <Text fontSize="1.56rem"  >
                    {staff.quote}
                  </Text>
                  <Heading sx={headingStyle}>
                      {staff.aka}
                  </Heading>
                  <Text sx={subHeadingStyle}>
                    {staff.department}
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          ))}
        </Box>
      </Box>
    )}
   </>
  )
}

export default Squad