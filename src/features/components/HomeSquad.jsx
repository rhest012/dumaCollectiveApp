import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import PortraitImageOne from '../../assets/bodyImages/DumaImage02.jpg';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeSquad = () => {
  const imageStyling = {
    borderRadius: "0.5rem"
  };

  const gridContainerStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  };

  // Framer Motion
  const MotionBox = motion(Box);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const elementHeight = element.offsetHeight;
    const elementTop = element.offsetTop;
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + windowHeight;
      const elementBottom = elementTop + elementHeight;

      if (scrollPosition >= elementTop && scrollPosition <= elementBottom + windowHeight) {
        const scrollPercentage = (scrollPosition - elementTop) / (elementBottom + windowHeight - elementTop);
        element.style.transform = `translateY(${scrollPercentage * 100}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box borderTop="1px solid #1E174B" />
      <Grid
        gridTemplateColumns="1fr 1fr"
        margin="0 2rem"
        height="100vh"
      >
        <GridItem sx={gridContainerStyling}>
          <Image
            src={PortraitImageOne}
            height="700px"
            sx={imageStyling}
          />
        </GridItem>
        <GridItem>
          <MotionBox
            ref={ref}
            className="content-inner-container"
            style={{
              transition: 'transform 0.3s ease'
            }}
          >
            <Heading variant="h2" textAlign="left">
              Background
            </Heading>
            <Text textAlign="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste at repudiandae quis. Modi ad unde pariatur animi? Nulla, saepe accusantium? Doloribus, fuga? Ipsa aliquid architecto non voluptates tenetur repudiandae quia est quos adipisci voluptatem soluta, iusto accusantium expedita nemo explicabo delectus modi reiciendis, velit molestiae recusandae sequi harum impedit?<br /><br />

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste at repudiandae quis. Modi ad unde pariatur animi? Nulla, saepe accusantium? Doloribus, fuga? Ipsa aliquid architecto non voluptates tenetur repudiandae quia est quos adipisci voluptatem soluta, iusto accusantium expedita nemo explicabo delectus modi reiciendis, velit molestiae recusandae sequi harum impedit?
            </Text>
          </MotionBox>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomeSquad;
