import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

import React, { useEffect, useState } from "react";
import JffBackground from "../../../assets/theGrind/jff/jff-background.jpg";
import JffInstaCard from "../components/JffInstaCard";
import JFFSwiper from "../components/JFFSwiper";
import JffHeader from "../../../assets/theGrind/jff/JFF_Header.jpg";
import JffTwitterCard from "../components/JffTwitterCard";

import { motion, easeIn } from "framer-motion";
import Typewriter from "typewriter-effect";

const Jff = () => {
  const singleAnnualSocialStyle = {
    fontFamily: "Fira Condensed",
    width: "100%",
    borderRadius: "2rem",
    px: "1.5rem",
    py: "1rem",
  };

  const AnnualSocialStyle = {
    fontSize: "1.25rem",
    lineHeight: "1.6rem",
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "300",
  };

  // Framer Motion
  const MotionBox = motion(Box);

  // Typewriter
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterStarted(true);
    }, 1500); // Start Typewriter after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box marginTop="1rem">
        <Heading variant="h1" as="h1" textAlign="center">
          <Typewriter
            options={{
              strings: "JFF Case Study",
              autoStart: true,
              delay: 25,
              pauseFor: 2000000,
              cursor: "",
            }}
          />
        </Heading>
      </Box>
      <MotionBox
        marginTop="1rem"
        marginBottom="4rem"
        backgroundImage={JffHeader}
        height="92vh"
        backgroundSize="cover"
        backgroundPosition="left bottom"
        layoutId="case-study-image-2"
        transition={{ ease: easeIn, duration: 0.8 }}
      />
      <JFFSwiper />
      <Flex
        justifyContent="space-between"
        gap={{
          base: "2rem",
          sm: "2rem",
          md: "2rem",
          lg: "12rem",
          xl: "12rem",
        }}
        alignItems="center"
        my="4rem"
        mx="4rem"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <Box backgroundImage={JffBackground} sx={singleAnnualSocialStyle}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading sx={AnnualSocialStyle}>
              Instagram
              <br />
              Yearly
              <br /> Report
            </Heading>
            <AiOutlineInstagram
              color="#FFFFFF"
              fontSize="4rem"
              textAlign="right"
            />
          </Flex>
        </Box>
        <Box backgroundImage={JffBackground} sx={singleAnnualSocialStyle}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading sx={AnnualSocialStyle}>
              Twitter
              <br />
              Yearly
              <br /> Report
            </Heading>
            <CiTwitter color="#FFFFFF" fontSize="4rem" />
          </Flex>
        </Box>
      </Flex>

      <JffInstaCard />
      <JffTwitterCard />
    </>
  );
};

export default Jff;
