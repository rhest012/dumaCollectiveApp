import { Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import Lady from "../../assets/bodyImages/lady-looking-up.png"
import React from 'react'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <Grid 
        gridTemplateColumns={{ base:"1fr", sm:"1fr",  md:"1fr", lg:"1fr 1fr", xl:"1fr 1fr"}}
        background="brand.900"
        height={{ base:"auto", sm:"auto", md:"auto", lg:"80vh", xl:"80vh"}}
        overflow="hidden"
        
    >
        <GridItem
            display="flex"
            flexDir="column"
            padding="2rem"
            justifyContent="center"
            alignContent="center"
        >
            <Heading variant="h2" color="#fff">
                An Oasis for African creativity to flourish
            </Heading>
            <Text variant="p" color="#fff">
                Through our collaborative partnerships and unwavering support, we aim to catalyse a vibrant and inclusive creative ecosystem that celebrates the unique perspective and talents of Africa.<br/><br/>

                Together, we are building a future where African creativity takes centre stage and transforms the world. Sessions to meticulous attention to detail, our creative staff thrives on turning ideas into reality.
            </Text>
            <Link to="/get-in-touch">
                <Button variant="standardButtonLight">
                    Get In Touch
                </Button>
            </Link>
        </GridItem>
        <GridItem
            display="flex"
            alignContent="flex-end"
            alignItems="flex-end"
            justifyContent="flex-end"
        >
            <Image
                src={Lady}
                height={{ base:"400px", sm:"500px", md:"500px", lg:"600px", xl:"600px" }}
            />
            
        </GridItem>

    </Grid>
  )
}

export default HomeAbout