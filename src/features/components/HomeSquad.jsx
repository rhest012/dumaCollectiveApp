import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import PortraitImageOne from '../../assets/bodyImages/DumaImage02.jpg'
import React from 'react'

const HomeSquad = () => {
    const imageStyling = {
        borderRadius : "0.5rem"
    }

    const gridContainerStyling = {
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    }

  return (
    <>
        <Box borderTop="1px solid #1E174B"/>
        <Grid 
            gridTemplateColumns="1fr 1fr"
            margin ="0 2rem"
            height = "100vh"
        >
            <GridItem sx={gridContainerStyling}>
                <Image
                    src={PortraitImageOne}
                    height="700px"
                    sx={imageStyling}
                />
            </GridItem>
            <GridItem sx={gridContainerStyling}>
                <Heading variant="h2" textAlign="left">
                    Background
                </Heading>
                <Text textAlign="left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste at repudiandae quis. Modi ad unde pariatur animi? Nulla, saepe accusantium? Doloribus, fuga? Ipsa aliquid architecto non voluptates tenetur repudiandae quia est quos adipisci voluptatem soluta, iusto accusantium expedita nemo explicabo delectus modi reiciendis, velit molestiae recusandae sequi harum impedit?<br/><br/>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste at repudiandae quis. Modi ad unde pariatur animi? Nulla, saepe accusantium? Doloribus, fuga? Ipsa aliquid architecto non voluptates tenetur repudiandae quia est quos adipisci voluptatem soluta, iusto accusantium expedita nemo explicabo delectus modi reiciendis, velit molestiae recusandae sequi harum impedit?

                </Text>
            </GridItem>
        </Grid>
    </>
  )
}

export default HomeSquad