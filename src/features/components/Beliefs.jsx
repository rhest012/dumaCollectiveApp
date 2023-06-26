import React, { useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react"
import LandscapeImage from "../../assets/bodyImages/DumaImage01.jpg"
import PortraitImage from "../../assets/bodyImages/DumaImage02.jpg"
import { useEffect } from 'react'
// Import GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Beliefs = () => {
    const imageStyling = {
        borderRadius : "0.5rem"
    }
  
    const ethosTextContainerStyle = {
    marginLeft:"1rem",
    height:"100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
    }

    // Gsap
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [activeImage, setActiveImage] = useState(1)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
          const pin = gsap.fromTo(
            sectionRef.current,
            {
              translateX: 0,
            },
            {
            //   translateX: getTranslateXValue(),
              translateX: -1384,
              ease: "none",
              duration: 2,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 2,
                pin: true,
              },
            }
          );

        //   function getTranslateXValue() {
        //     const screenWidth = window.innerWidth;
        //     const breakpoints = {
        //       tiny: 500,
        //       small: 640,
        //       medium: 768,
        //       large: 1024,
        //     };
      
        //     if (screenWidth < breakpoints.tiny) {
        //       return '-3480px';
        //     } else if (screenWidth < breakpoints.small) {
        //       return '-3440px';
        //       // 1440 * 3 + 32
        //     } else if (screenWidth < breakpoints.medium) {
        //       return '-4336px';
        //     } else if (screenWidth < breakpoints.large) {
        //       return '-4336px'; 
        //     } else {
        //       return '-4336px';
        //     }
        //   }

          return () => {
            pin.kill();
          };
      }, []);



  return (
   <>
    <Box borderTop="1px solid #1E174B"/>
    <Box  
        padding="0 2rem" 
    >
        <Box
            className="scroll-section-outer"
            overflow="hidden"
        >
            <Box
                ref={triggerRef}
            >
                <Heading 
                        variant="h2" 
                        textAlign="center"
                        paddingY="2rem"
                    >
                        Our Beliefs
                </Heading>
                <Box
                     className="scroll-section-inner"
                     height="80vh"
                     display="flex"
                     flexDir="column"
                     flexWrap="wrap"
                     ref={sectionRef}
                     justifyContent="center"
                >
                    
                    <Flex
                        alignItems="center"
                        position="relative"
                        gap="2rem"
                        className="grid-container"
                    >
                        <Grid className="beliefs-container" gridTemplateColumns="1fr 1fr" gap="1rem">
                            <GridItem display="flex" justifyContent="space-between" width="667px">
                                <Image
                                    height="300px"
                                    src={LandscapeImage}
                                    sx={imageStyling}
                                    // variant="dumaImage"
                                />
                                <Box sx={ethosTextContainerStyle}>
                                    <Heading variant="h3">
                                        Vision
                                    </Heading>
                                    <Text variant="p">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem display="flex" justifyContent="space-between" width="667px">
                                <Image
                                height="300px"
                                src={PortraitImage}
                                sx={imageStyling}
                                />
                                <Box sx={ethosTextContainerStyle}>
                                <Heading variant="h3">
                                    Ethos
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
                                </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                        <Grid className="beliefs-container" gridTemplateColumns="1fr 1fr" gap="1rem">
                            <GridItem display="flex" justifyContent="space-between" width="667px">
                                <Image
                                    height="300px"
                                    src={LandscapeImage}
                                    sx={imageStyling}
                                    // variant="dumaImage"
                                />
                                <Box sx={ethosTextContainerStyle}>
                                    <Heading variant="h3">
                                        Vision
                                    </Heading>
                                    <Text variant="p">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem display="flex" justifyContent="space-between" width="667px">
                                <Image
                                height="300px"
                                src={PortraitImage}
                                sx={imageStyling}
                                />
                                <Box sx={ethosTextContainerStyle}>
                                <Heading variant="h3">
                                    Ethos
                                </Heading>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eligendi dignissimos odio labore mollitia eius eos ratione amet, dolorum vero?
                                </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Flex>
                </Box>
            </Box>
        </Box>
        {/* <Flex gap="2rem"> */}
        
        {/* </Flex> */}
    </Box>
   </>

  )
}

export default Beliefs