import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import SibuMabena from '../../../assets/newsroom/SibuMabena.jpg'
import NewsRoomHeader from '../components/NewsRoomHeader'
import { useFetchFirebase } from '../../../actions/useFetchFirebase'
import { Link } from 'react-router-dom'

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
      <NewsRoomHeader/>
      <>
      {data.map((buzzItem, index) => (
  <Grid
    key={index}
    gridTemplateColumns="30% 70%"
    marginX="2.5rem"
    marginTop="3rem"
    gap="2rem"
    paddingY="2.5rem"
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