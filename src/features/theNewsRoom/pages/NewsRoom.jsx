import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import SibuMabena from '../../../assets/newsroom/SibuMabena.jpg'
import NewsRoomHeader from '../components/NewsRoomHeader'
import { useFetchFirebase } from '../../../actions/useFetchFirebase'

const NewsRoom = () => {
  const buttonStyle = {
    color:"#fff", 
    background:"#1E174B",
    border: "1px solid #1E174B",
    paddingY:"1.25rem",
    borderRadius:"2rem",
    width:"125px",

    _hover: {
      background:"transparent",
      border: "1px solid #1E174B",
      color: "#1E174B"
    }

  }

  const data  = useFetchFirebase('NewsRoom');

  return (
    <>
      {data && (

    <Box> 
      <NewsRoomHeader/>
      {/* <Grid gridTemplateColumns="30% 70%" marginX="2.5rem" marginTop="3rem" gap="2rem" paddingY="2.5rem" borderTop="1.5px solid #1E174B" borderBottom="1.5px solid #1E174B">
          <GridItem>
            <Image src={SibuMabena}/>
          </GridItem>
          <GridItem >
            <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
              <Stack>
                <Heading as="h3">
                  Sibu Mabena wins big award!
                </Heading>
                <Text fontFamily="Fira Sans Condensed" fontSize="1.25rem" textTransform="uppercase">19 February 2023</Text>
              </Stack>
              <Text maxWidth="600px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
            </Flex>
          </GridItem>
      </Grid> */}
      {/* <Box marginY="3rem" marginX="2rem">
        <Grid gridTemplateColumns= "repeat(3, 1fr)" gap="2rem"> 
          <GridItem 
            border="1px solid #1E174B" 
            borderRadius="0.5rem" 
            padding="1rem" 
            display="flex" 
            flexDir="column" 
            gap="1rem"
          >
            <Image src={SibuMabena} borderRadius="0.5rem"/>
            <Heading as="h3" marginTop="1rem">
                  Sibu Mabena wins big award!
              </Heading>
              <Text>19 February 2023</Text>
              <Text height="100px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
          </GridItem>
          <GridItem 
            border="1px solid #1E174B" 
            borderRadius="0.5rem" 
            padding="1rem" 
            display="flex" 
            flexDir="column" 
            gap="1rem"
          >
            <Image src={SibuMabena} borderRadius="0.5rem"/>
            <Heading as="h3" marginTop="1rem">
                  Sibu Mabena wins big award!
              </Heading>
              <Text>19 February 2023</Text>
              <Text height="100px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
          </GridItem>
          <GridItem 
            border="1px solid #1E174B" 
            borderRadius="0.5rem" 
            padding="1rem" 
            display="flex" 
            flexDir="column" 
            gap="1rem"
          >
            <Image src={SibuMabena} borderRadius="0.5rem"/>
            <Heading as="h3" marginTop="1rem">
                  Sibu Mabena wins big award!
              </Heading>
              <Text>19 February 2023</Text>
              <Text height="100px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
          </GridItem>
        </Grid>
      </Box> */}
      <Box 
        marginX="2rem"
        marginY="6rem"
      >
        <Text variant="p" as="p" textAlign="left" width="50%">
          At Duma Collective we thrive on building brands, driven by creative ideation and insights. ​
          Servicing an array of clients, from FMCG, Energy and Sustainability, Technology and  Enterprise Development, Financial Services to government departments. We drive business growth for our clients through collaborative thinking and the implementation of our service offerings with excellence!​<br/>  ​
          <br/>
          We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.​
        </Text>
      </Box>
      <Box marginY="7rem" marginX="2rem">
      
        <Grid gridTemplateColumns= "repeat(2, 1fr)"  justifyContent="space-between" marginX="4rem"> 
        {data.map((item, index) => (
          <GridItem 
            borderRadius="0.5rem" 
            padding="1rem" 
            display="flex" 
            border="1px solid #1E174B"
            flexDir="column" 
            gap="1rem"
            width="500px"
            height="800px"
            marginY="2rem"
            _even = {{
              marginTop: "6rem"
            }}
          >
            <Image src={SibuMabena} borderRadius="0.5rem"/>
            <Heading as="h3" marginTop="1rem" height="160px">
                 {item.title}
              </Heading>
              <Text>{item.date}</Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
          </GridItem>
        ))} 
        {/* <GridItem 
          borderRadius="0.5rem" 
          padding="1rem" 
          display="flex" 
          border="1px solid #1E174B"
          flexDir="column" 
          gap="1rem"
          width="500px"
          marginTop="4rem"
          height="720px"
        >
          <Image src={SibuMabena} borderRadius="0.5rem"/>
          <Heading as="h3" marginTop="1rem">
            Hello
            </Heading>
            <Text>19 February 2023</Text>
            <Button sx={buttonStyle}>
              Read Article
            </Button>
        </GridItem>        */}
        </Grid>
      </Box>
    </Box>
  )}
  </>
  )
}

export default NewsRoom