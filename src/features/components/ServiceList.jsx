import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SocialIconsHorizontal from './SocialIconsHorizontal'

const ServiceList = () => {
    const services = [
        "Branding & Creative Strategy",
        "Public Relations",
        "Social Media",
        "Influencer Marketing",
        "Events and Production",
        "Talent Procurement"
    ]

  return (
    <Grid 
        gridTemplateColumns={{ base:"1fr", sm:"1fr", md:"1fr", lg:"45% 55%", xl:"45% 55%" }}
        gap={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
        height={{ base:"auto", sm:"auto", md:"auto", lg:"80vh", xl:"75vh"}}
        marginY="2rem"
        maxWidth="100vw"
        marginX="2rem"
    >
        <GridItem
            display="flex"
            flexDir="column"
            justifyContent="center"
        >
            <Heading variant="h2">
                A solution<br/>for every need
            </Heading>
            <Text variant="p" paddingY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}>
                At Duma Collective we thrive on building brands, driven by creative ideation and insights.  Servicing an array of clients, from FMCG, Energy and Sustainability, Technology and Enterprise Development, Financial Services to government departments. We drive business growth for our clients through collaborative thinking and the implementation of our service offerings with excellence! We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.
            </Text>
            <SocialIconsHorizontal/>
        </GridItem>
        <GridItem 
            display="flex"
            flexWrap="wrap"
            justifyContent={{ base:"center", sm:"center", md:"space-between", lg:"space-between", xl:"space-between" }}
            alignContent="center"
            gap={{ base:"0", sm:"1rem", md:"1rem", lg:"0", xl:"0"}}
            width="100%"
            paddingRight={{base:"0", sm:"0", md:"0", lg:"2rem", xl:"2rem"}}
        >
            {services.map((service, index) => (
                <Box 
                    border="1px solid #1d1749" 
                    padding="1rem"
                    height="150px"
                    width="220px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={index}
                    marginY="0.6rem"
                    
                >
                    <Heading variant="h5" textTransform="uppercase">
                        {service}
                    </Heading>
                </Box>
            ))}
        </GridItem>
    </Grid>
  )
}

export default ServiceList