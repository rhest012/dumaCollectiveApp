import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react"
import LandscapeImage from "../../assets/bodyImages/DumaImage01.jpg"
import PortraitImage from "../../assets/bodyImages/DumaImage02.jpg"


const Beliefs = () => {
    const imageStyling = {
        borderRadius : "0.5rem"
      }
  
      const ethosTextContainerStyle = {
        marginLeft:"1rem",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center"
      }

  return (
   <>
    <Box borderTop="1px solid #1E174B"/>
    <Box 
        height="100vh" 
        padding="0 2rem" 
        display="flex" 
        flexDirection="column" 
        flexWrap="wrap" 
        alignContent="center"
        justifyContent="center"
    >
        <Heading variant="h2" textAlign="center">
            Our Beliefs
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gap="1rem">
        <GridItem display="flex" justifyContent="space-between" width="100%">
            <Image
                height="300px"
                src={LandscapeImage}
                sx={imageStyling}
                // variant="dumaImage"
            />
            <Box sx={ethosTextContainerStyle}>
                <Heading variant="h3">
                    Vision
                </Heading>
                <Text variant="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
                </Text>
            </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="space-between" width="100%">
            <Image
            height="300px"
            src={PortraitImage}
            sx={imageStyling}
            />
            <Box sx={ethosTextContainerStyle}>
            <Heading variant="h3">
                Ethos
            </Heading>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
            </Text>
            </Box>
        </GridItem>
        </Grid>
    </Box>
   </>

  )
}

export default Beliefs