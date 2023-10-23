import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HomeShowreel = () => {
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
      delay: 1,
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
      delay: 1,
    },
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "40% 60%",
        xl: "40% 60%",
      }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "90vh" }}
      overflow="hidden"
      marginX="2rem"
      data-scroll-section
    >
      <GridItem
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        marginRight={{ base: "0", sm: "0", md: "", lg: "1rem", xl: "1rem" }}
      >
        <Heading variant="h2" minHeight="150px">
          <Typewriter
            options={{
              strings: "An oasis for African creativity to flourish.",
              autoStart: true,
              delay: 25,
              pauseFor: 2000000,
              cursor: "",
            }}
          />
        </Heading>
        <MotionText
          variant="p"
          variants={textDescriptionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          marginTop="1rem"
        >
          Step into our collaborative work environment, where creativity is at
          the heart of everything we do.
        </MotionText>
        <Link to="/the-grind">
          <MotionButton
            variant="standardButton"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            The Grind
          </MotionButton>
        </Link>
      </GridItem>
      <MotionGridItem
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        marginTop={{ base: "2rem", lg: "0" }}
        variants={videoContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex style={{ aspectRatio: "16/9", maxWidth: "100vw" }}>
          <ReactPlayer
            className="video-player"
            url="https://youtu.be/wioUsVwgSZU"
            style={{ width: "100%", height: "100%" }}
            loop={true}
            playing={true}
            muted={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0, modestbranding: 1 },
              },
            }}
          />
        </Flex>
      </MotionGridItem>
    </Grid>
  );
};

export default HomeShowreel;
