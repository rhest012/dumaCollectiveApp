import { Flex, Heading, Text } from '@chakra-ui/react'

const GrindHeader = () => {
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
          Newsroom
        </Heading>
        <Text
          textAlign="right"
          paddingLeft="60%"
          variant="p"
        >
         Duma Collective in action from branding, and creative strategy to PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
        </Text>
    </Flex>
  )
}

export default GrindHeader