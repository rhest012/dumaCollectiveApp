import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Video from "../../assets/videos/homeVideo.mp4";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const HomeAbout = () => {
  // Typewriter
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [typewriterStarted, setTypewriterStarted] = useState(false);

  useEffect(() => {
    if (inView && !typewriterStarted) {
      const timeoutId = setTimeout(() => {
        setTypewriterStarted(true);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inView, typewriterStarted]);

  // Framer Motion
  const MotionGridItem = motion(GridItem);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 2.5,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 0.1,
    },
  };

  const textDescriptionVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 0.1,
    },
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "1fr 1fr",
        xl: "1fr 1fr",
      }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "100vh" }}
      overflow="hidden"
      margin="2rem"
      data-scroll-section
      ref={ref}
    >
      <GridItem
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        maxWidth="80vw"
      >
        <Heading variant="h2" minHeight="140px">
          <Typewriter
            options={{
              strings:
                "Redefining creative communications from Africa to the world.",
              autoStart: typewriterStarted,
              delay: 25,
              pauseFor: 2000000,
              cursor: "",
            }}
          />
        </Heading>
        <MotionText
          variant="sectionDescription"
          variants={textDescriptionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          We envision a future in which African creativity emerges boldly,
          taking centre stage and making a global influence. Our creative team
          thrives on turning your ideas into a viral-worthy reality, pushing the
          limits of what's possible.
        </MotionText>

        <Link to="/what-we-do">
          <MotionButton
            variant="standardButton"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            What We Do
          </MotionButton>
        </Link>
      </GridItem>
      <MotionGridItem
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
        variants={videoContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box
          width={{ base: "350px", lg: "400px" }}
          height={{ base: "533px", lg: "711px" }}
        >
          <ReactPlayer
            paddingY="4rem"
            url={Video}
            playing={true}
            loop={true}
            muted={true}
            playsinline
            width={{ base: "350px", lg: "400px" }}
            height={{ base: "533px", lg: "711px" }}
          />
        </Box>
      </MotionGridItem>
    </Grid>
  );
};

export default HomeAbout;
