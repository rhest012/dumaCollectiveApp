import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SocialIcons from './SocialIcons'

const HomeContat = () => {
  return (
    <Box width="100%">
        <Heading paddingY="2rem" variant="h2" textAlign="center">
        Get In Touch
      </Heading>
      <Grid gridTemplateColumns ="1fr 1fr" paddingX="32rem" gap="8rem" paddingBottom="2rem">
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
          <GridItem>
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