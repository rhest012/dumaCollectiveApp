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

    console.log(services)
  return (
    <Grid 
        gridTemplateColumns="45% 55%"
        marginX="2rem"
        gap="2rem"
        height="83vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <GridItem>
            <Heading variant="h2">
                A solution<br/>for every need
            </Heading>
            <Text variant="p" paddingY="2rem">
                At Duma Collective we thrive on building brands, driven by creative ideation and insights.  Servicing an array of clients, from FMCG, Energy and Sustainability, Technology and Enterprise Development, Financial Services to government departments. We drive business growth for our clients through collaborative thinking and the implementation of our service offerings with excellence! We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.
            </Text>
            <SocialIconsHorizontal/>
        </GridItem>
        <GridItem 
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)" 
            gridTemplateRows="repeat(2, 1fr)"
            gap="2rem"
            marginX="4rem"
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
                    paddingX="1rem"
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