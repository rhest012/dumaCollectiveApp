import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import NbaCaseStudy from "../components/NbaCaseStudy";
import MultichoiceHeader from "../../../assets/theGrind/Multichoice/MCG_Header.jpg";
import MultichoiceReachCard from "../components/MultichoiceReachCard";
import { easeIn, motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Multichoice = () => {
  // Framer Motion
  const MotionBox = motion(Box);

  return (
    <Box>
      <Box marginY="2rem">
        <Heading variant="h1" as="h1" textAlign="center">
          <Typewriter
            options={{
              strings: "Multichoice Case Study",
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
          backgroundImage={MultichoiceHeader}
          layoutId="case-study-image-3"
          transition={{ ease: easeIn, duration: 0.8 }}
          height="92vh"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <MultichoiceReachCard />
      </Box>
    </Box>
  );
};

export default Multichoice;
