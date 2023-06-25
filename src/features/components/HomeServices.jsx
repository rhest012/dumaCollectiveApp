import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "../../assets/bodyImages/homeService1.jpg"

const HomeServices = () => {

    const services = [ 
        "Talent Procurement", 
        "Events and Production", 
        "Influencer Marketing", 
        "Social Media", 
        "Public Relations", 
        "Branding and Creative Strategy"
    ]
  return (
    <>
        <Box borderTop="1px solid #1E174B"/>
        <Box
            height="100vh" 
            
        >
            <Grid gridTemplateColumns="30% 70%">
                <GridItem 
                    height="100%" 
                    display="flex" 
                    flexDir="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    paddingRight="2rem"
                    borderBottom="1px solid #1E174B"
                >
                    <Heading variant="h2" textAlign="center" paddingLeft="2rem">
                        Services
                    </Heading>
                    <Text variant="p" textAlign="center" paddingLeft="2rem">
                        We let brands come alive through creative ideation and insights
                    </Text>
                    <Box borderTop="1px solid #1E174B"/>
                </GridItem>
                <GridItem height="100vh">
                    <Grid gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="1fr 1fr" height="100%" width="100%">
                    {services.map(( service, index ) => (
                        <GridItem key={index} 
                            borderLeft="1px solid #1E174B"
                            borderBottom="1px solid #1E174B"
                            height="100%" 
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"

                            _hover={{
                                content: `url(${require(`../../assets/bodyImages/homeService1.jpg`)})`,
                                position: "center",
                                backgroundSize: "contain",
                                color: "#fff"
                              }}
                        >
                            <Heading variant="h4" textAlign="center">
                                {service}
                            </Heading>
                        </GridItem>
                    ))}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    </>
  )
}

export default HomeServices