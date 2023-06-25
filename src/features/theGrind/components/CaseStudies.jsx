import { Box, Flex, Grid, GridItem, Heading, Image, LinkBox, background } from '@chakra-ui/react'
import { Link, Link as ReachLink, useLocation} from 'react-router-dom'
import React from 'react'
import { Links } from '../../../styles/Navbar.style'

const CaseStudies = () => {
    const activeCaseStudies = [
        {
            clientName: "NBA",
            clientLogo: "nba-africa.png",
            url: "/the-grind/nba"
        },
        {
            clientName: "JFF",
            clientLogo: "jff.png",
            url: "/the-grind/jff"
        },
        {
            clientName: "multiChoice",
            clientLogo: "multichoice.png",
            url: "/the-grind/multichoice"
        },
    ]
  
return (
    <Box
    marginY="4rem"
    marginX="2rem"
  > 
    <Heading 
      variant="h3" 
      as="h3"
      textAlign="center"
      paddingBottom="2rem">
      Case Studies
    </Heading>
    <Grid 
        gridTemplateColumns="repeat(3, 1fr)"
        display="flex"
        justifyContent="center"
        gap="8rem"
    >
      {activeCaseStudies.map((activeCaseStudy, index) => (
        <LinkBox 
        as="ReachLink"
        to={activeCaseStudy.url}
    >
            <GridItem 
                className="single-case-study-container" 
                key={index} display="flex" 
                justifyContent="center" 
                alignItems="center"
                borderRadius="0.5rem"
                border="1px solid #1E174B"
                width="270px"
            >
                <Box>
                    <Image
                        // src={activeCaseStudy.clientLogo}
                        src={require(`../../../assets/theGrind/caseStudies/${activeCaseStudy.clientLogo}`)} 
                        width="270px"
                        borderRadius="0.5rem"
                        height="155px"

                        _hover = {{
                            content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                            width:"100%",
                        }}
                        /> 
                        <Links>
                            Explore
                        </Links> 
                </Box>             
            </GridItem>
        </LinkBox>
      ))}
    </Grid>
  </Box>
  )
}

export default CaseStudies