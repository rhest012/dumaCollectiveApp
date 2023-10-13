import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import NbaAfricaHeaderImage from "../../../assets/theGrind/Nba_Africa/NBA-Africa-Header.jpg";
import NbaCaseStudy from "../components/CaseStudyBody";
import NbaEvaluation from "../components/NbaEvaluation";
import { easeIn, motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const NbaAfrica = () => {
  // Framer Motion
  const MotionBox = motion(Box);
  return (
    <Box>
      <Box marginY="2rem">
        <Heading variant="h1" as="h1" textAlign="center">
          <Typewriter
            options={{
              strings: "NBA Africa Case Study",
              autoStart: true,
              delay: 25,
              pauseFor: 2000000,
              cursor: "",
            }}
          />
        </Heading>
        <MotionBox
          marginTop="1rem"
          marginBottom="4rem"
          backgroundImage={NbaAfricaHeaderImage}
          height="92vh"
          backgroundSize="cover"
          backgroundPosition="center"
          layoutId="case-study-image-1"
          transition={{ ease: easeIn, duration: 0.8 }}
        />
      </Box>
      <NbaCaseStudy />
      <NbaEvaluation />
    </Box>
  );
};

export default NbaAfrica;
