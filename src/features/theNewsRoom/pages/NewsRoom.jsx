import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import SibuMabena from '../../../assets/newsroom/SibuMabena.jpg'
import NewsRoomHeader from '../components/NewsRoomHeader'
import { useFetchFirebase } from '../../../actions/useFetchFirebase'
import { Link } from 'react-router-dom'
import BuzzHeader from '../../components/BuzzHeader'

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
  console.log(data)

  return (
    <>
      {data && (
    <Box> 
    <BuzzHeader/>
      <>
      {data.map((buzzItem, index) => (
  <Grid
    key={index}
    gridTemplateColumns={{ base:"1fr", sm:"1fr", md:"30%, 70%", lg:"30%, 70%", xl:"30% 37%" }}
    marginX="2rem"
    marginTop={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
    gap="2rem"
    paddingY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
    borderBottom="1.5px solid #1E174B"
  >
    <GridItem>
      <Image src={SibuMabena} />
    </GridItem>
    <GridItem>
      <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="space-between" paddingRight="2rem">
        <Stack>
          <Heading variant="h3" as="h3">{buzzItem.title}</Heading>
          <Text variant="p" as="p" fontSize="1rem" textTransform="uppercase">{buzzItem.date}</Text>
        </Stack>
        <Text>
         {buzzItem.caption}
        </Text>
        <Link>
          <Button variant="standardButton">
            Read Article
          </Button>
        </Link>
      </Flex>
    </GridItem>
  </Grid>
))}

      </>
    </Box>
  )}
  </>
  )
}

export default NewsRoom