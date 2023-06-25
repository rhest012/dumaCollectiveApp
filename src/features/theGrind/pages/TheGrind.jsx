import { Box, Flex, Grid, GridItem, Heading, Image, LinkBox, Text, background, textDecoration } from '@chakra-ui/react'
import GrindHeader from '../components/GrindHeader'
import SecondaryHeader from '../../components/SecondaryHeader'
import NbaAfricaLogo from '../../../assets/theGrind/Nba_Africa/NBA_Africa_Logo.svg'
import MultichoiceLogo from '../../../assets/theGrind/Multichoice/Multichoice_Logo.svg'
import JffLogo from '../../../assets/theGrind/jff/JFF_Logo.svg'
import { useFetchFirebase } from '../../../actions/useFetchFirebase'
import { Link, Link as ReachLink, useLocation} from 'react-router-dom'
import useFetch from '../../../actions/useFetchData'
import { Links, NavbarLink } from '../../../styles/Navbar.style'

import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import PageIntro from '../components/pageIntro'

const TheGrind = () => {
  const linkBoxStyling = {
    display:"flex",
    flexDir:"column",
    justifyContent:"center" ,
    alignItems:"center",
    border:"1px solid #1E174B",
    borderRadius:"0.5rem",
    width:"400px",

    _hover: {
      
    }
  }

  const imageStyling = {
    width:"400px",
    height:"225px",
    borderRadius:"0.6rem",
    _hover: {
      width:"100%"
    }
  }

  const { data, error, isPending} = useFetch(' http://localhost:8000/clients');

  // const data  = useFetchFirebase('clients');

  // Page Location
  const location = useLocation();
  const pageLocation = location.pathname;

  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"]
  });
  
  return (
    <>  
      {data && (  
      <Box>
      <SecondaryHeader pageLocation={pageLocation}/>
      <PageIntro pageLocation={pageLocation}/>
      <Box borderTop="1px solid #1E174B"/>
      <Grid margin="4rem 2rem" gridTemplateColumns="32% 68%">
        <GridItem>
          <MotionBox className="client-outer-container" ref={targetRef}>
            <Flex className="client-inner-container" height="100%" justifyContent="center">
              <MotionHeading 
                variant="h3" 
                as="h3" 
                textAlign="right" 
                pathLength="1"
                style={{ pathLength: scrollYProgress }}
              >
                Shoutout To <br/>
                Our Clients
              </MotionHeading>
            </Flex>
          </MotionBox>
        </GridItem>
        <GridItem width="100%">
            <Grid gridTemplateColumns="repeat(4, 1fr)" gap="2rem" marginY="2rem">
              {data.map((item, index) => (  
                <GridItem key={index} width="100%" border="1px solid #2C245B" borderRadius="0.5rem" padding="2rem">
                  <Image
                    src={require(`../../../assets/theGrind/clientLogos/${item.clientLogo}`)}
                    width="190px"
                  />
                </GridItem>
              ))}
              </Grid>  
        </GridItem>
      </Grid>
      
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
        <Grid display="flex" justifyContent="space-between" gridTemplateColumns="repeat(3, 1fr)">
        <GridItem>
            <LinkBox 
              as={ReachLink}
              className="case-study-container" 
              to="/the-grind/jff"
              sx={linkBoxStyling }
              height="260px"
            >
              <Image
                src={JffLogo}
                className="case-study-image" 
                width="400px"
                height="225px"
                borderRadius="0.6rem"
                _hover = {{
                  content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                  width:"100%"
                }}
              /> 
              <Heading className="case-study-text" fontSize="0.85rem" marginY="0.5rem" textTransform="uppercase">
                Explore
              </Heading>
            </LinkBox>
          </GridItem>
          <GridItem>
            <LinkBox 
              as={ReachLink}
              className="case-study-container" 
              to="/the-grind/jff"
              sx={linkBoxStyling }
              height="260px"
            >
              <Image
                src={MultichoiceLogo}
                className="case-study-image" 
                width="400px"
                height="225px"
                borderRadius="0.6rem"
                _hover = {{
                  content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                  width:"100%"
                }}
              /> 
              <Heading className="case-study-text" fontSize="0.85rem" marginY="0.5rem" textTransform="uppercase">
                Explore
              </Heading>
            </LinkBox>
          </GridItem>
          <GridItem>
            <LinkBox 
              as={ReachLink}
              className="case-study-container" 
              to="/the-grind/jff"
              sx={linkBoxStyling }
              height="260px"
            >
              <Image
                src={JffLogo}
                className="case-study-image" 
                width="400px"
                height="225px"
                borderRadius="0.6rem"
                _hover = {{
                  content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                  width:"100%"
                }}
              /> 
              <Heading className="case-study-text" fontSize="0.85rem" marginY="0.5rem" textTransform="uppercase">
                Explore
              </Heading>
            </LinkBox>
          </GridItem>
        </Grid>
      </Box>
      </Box>
      )}
    </>
  )
}

export default TheGrind