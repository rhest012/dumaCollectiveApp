import { Box, Flex, Grid, GridItem, Heading, Image, LinkBox, Text, background, textDecoration } from '@chakra-ui/react'
import GrindHeader from '../components/GrindHeader'
import SecondaryHeader from '../../components/SecondaryHeader'
import NbaAfricaLogo from '../../../assets/theGrind/Nba_Africa/NBA_Africa_Logo.svg'
import MultichoiceLogo from '../../../assets/theGrind/Multichoice/Multichoice_Logo.svg'
import JffLogo from '../../../assets/theGrind/jff/JFF_Logo.svg'
import { useFetchFirebase } from '../../../actions/useFetchFirebase'
import { Link, Link as ReachLink, useLocation} from 'react-router-dom'
import SocialIconsHorizontal from "../../components/SocialIconsHorizontal"
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

  // const { data, error, isPending} = useFetch(' http://localhost:8000/clients');

  const data  = useFetchFirebase('clients');

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
      <Grid 
        margin="2rem" 
        gridTemplateColumns={{ base:"1fr", sm:"1fr", base:"1fr", lg:"40%,630%", xl:"40% 60%" }}
      >
        <GridItem>
          <MotionBox 
            className="client-outer-container" 
            ref={targetRef}
            display="flex"
            flexDir="column"
            height="100%" 
            marginRight= {{base:"0", sm:"0", md:"0", lg:"2rem", xl:"2rem"}}
            flexWrap="wrap" 
            justifyContent="center"
          >
            <MotionHeading 
              variant="h2" 
              as="h2"  
              pathLength="1"
              style={{ pathLength: scrollYProgress }}
            >
              A big Shout out to our clients
            </MotionHeading>
            <Text variant="p" as="p" paddingY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}>
              Duma Collective prides itself on serving a diverse range of clients in the advertising and entertainment industry. Our client portfolio includes renowned advertising agencies, production houses, and entertainment companies seeking innovative solutions to captivate their target audience. 
            </Text>
            <SocialIconsHorizontal/>
          </MotionBox>
        </GridItem>
        <GridItem width="100%" paddingTop={{base:"1rem", sm:"1rem", md:"1rem", lg:"0", xl:"0"}}>
            <Grid 
              gridTemplateColumns={{ base:"repeat(2, 1fr)", sm:"repeat(3, 1fr)", md:"repeat(5, 1fr)", lg:"repeat(5, 1fr)", xl:"repeat(5, 1fr)"}} 
              gap={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
              marginY={{ base:"1rem", sm:"1rem", md:"1rem", lg:"2rem", xl:"2rem"}}
            >
              {data.map((item, index) => (  
                <GridItem boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={index} width="130px" height="130px" display="flex" alignItems="center" justifyContent="center"> 
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
        marginY={{ base:"2rem", sm:"2rem", md:"2rem", lg:"4rem", xl:"4rem" }}
        marginX="2rem"
      > 
        <Heading 
          variant="h3" 
          as="h3"
          textAlign="center"
          paddingBottom="2rem"
        >
          Case Studies
        </Heading>
        <Flex 
          flexDir={{base: "column", sm: "column", md:"column", lg:"row", xl:"row"}}
          justifyContent="space-between"
          alignItems={{ base:"center", sm:"center", md:"center", lg:"space-between", xl: "space-between" }}
          gap={{base:"2rem", sm:"2rem", md:"2rem", lg:"0", xl:"0"}}
          width="100%"
          flexWrap="wrap"
        >
            
              <LinkBox 
                as={ReachLink}
                className="case-study-container" 
                to="/the-grind/jff"
                sx={linkBoxStyling }
                height={{ base:"200px", sm:"260px", md:"260px", lg:"260px", xl:"260px"}}
                width={{base:"308px", sm:"400px", md:"400px", lg:"400px", xl:"400px"}}
                flexShrink="3"
              >
                <Image
                  src={JffLogo}
                  className="case-study-image" 
                  width={{ base:"350px", sm:"400px", md:"400px", lg:"400px", xl:"400px" }}
                  height={{ base:"200px", xl:"225px", md:"225px", lg:"225px", xl:"225px" }}
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
            

            
              <LinkBox 
                as={ReachLink}
                className="case-study-container" 
                to="/the-grind/jff"
                sx={linkBoxStyling }
                height={{ base:"200px", sm:"260px", md:"260px", lg:"260px", xl:"260px"}}
                width={{base:"308px", sm:"400px", md:"400px", lg:"400px", xl:"400px"}}
                flexShrink="3"
              >
                <Image
                  src={MultichoiceLogo}
                  className="case-study-image" 
                  width={{ base:"350px", sm:"400px", md:"400px", lg:"400px", xl:"400px" }}
                  height={{ base:"200px", xl:"225px", md:"225px", lg:"225px", xl:"225px" }}
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
            
            
            
              <LinkBox 
                as={ReachLink}
                className="case-study-container" 
                to="/the-grind/jff"
                sx={linkBoxStyling }
                height={{ base:"200px", sm:"260px", md:"260px", lg:"260px", xl:"260px"}}
                width={{base:"308px", sm:"400px", md:"400px", lg:"400px", xl:"400px"}}
                flexShrink="3"
              >
                <Image
                  src={JffLogo}
                  className="case-study-image" 
                  width={{ base:"350px", sm:"400px", md:"400px", lg:"400px", xl:"400px" }}
                  height={{ base:"200px", xl:"225px", md:"225px", lg:"225px", xl:"225px" }}
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
        </Flex>
      </Box>
      </Box>
      )}
    </>
  )
}

export default TheGrind