import { Flex, Heading, Text } from '@chakra-ui/react'
import WhatWeDoHeaderBg from '../../assets/headers/What-We-Do-header.jpg'
import React from 'react'

const WhatWeDoHeader = () => {
  return (
      <Flex 
      height="40vh" 
      width="100wh" 
      flexDir="column"
      paddingY="2rem"
      paddingX="4rem"
      flexWrap="wrap"
      justifyContent="flex-end"
      borderBottom="1px solid #1a202c"
    >
        <Heading 
          variant="h1"
          width="60%"
          marginBottom="3rem"
        >
          What we do
        </Heading>
        <Text
          textAlign="right"
          paddingLeft="60%"
          variant="p"
        >
         We bring campaigns to life through branding and creative strategy, PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
        </Text>
    </Flex>
  )
}

export default WhatWeDoHeader