import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SocialIcons from './SocialIcons'

const HomeContat = () => {
  return (
    <Box width="100%">
        <Heading paddingY="2rem" variant="h2" textAlign="center">
        Get In Touch
      </Heading>
      <Grid 
        gridTemplateColumns={{ base:"1fr 1fr", sm:"1fr 1fr",  md:"1fr 1fr", lg:"1fr 1fr", xl:"1fr 1fr"}}
        paddingX={{ base:"2rem", sm:"2rem", md:"2rem", lg:"16rem",  xl:"32rem" }}
        gap={{ base:"1rem", sm:"1rem", md:"1rem", lg:"8rem", xl:"8rem" }}
        paddingBottom="2rem"
      >
          <GridItem
            display="flex"
            flexDirection="column"
          >
              <Heading variant="h5" paddingY="0.5rem">
                Our Home
              </Heading>
              <Text variant="p">
                JHB<br/>
              </Text>
              <Text variant="p" paddingY="0.5rem">
                New Building<br/>
                2 Bordeaux<br/>
                Randburg, 2129<br/>
              </Text>
              <Text variant="p" paddingY="0.5rem">
                +27 (0)10 443 5854<br/>
              </Text>
          </GridItem>
          <GridItem 
            display="flex" 
            flexDir="column" 
            alignItems={{base:"flex-end", sm:"flex-end", md:"flex-end", lg:"flex-start", xl:"flex-start"}}
            paddingRight= {{ base:"2rem", sm:"2rem", md:"2rem", lg:"0",  xl:"0" }}
          > 
            <Heading variant="h5" paddingY="0.5rem">
              Lets Chat
            </Heading>
            <SocialIcons/>
          </GridItem>
      </Grid>
    </Box>
  )
}

export default HomeContat