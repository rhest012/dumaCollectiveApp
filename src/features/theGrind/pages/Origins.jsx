import { Box, Heading } from "@chakra-ui/react";
import { easeIn, motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import OriginsHeader from "../../../assets/theGrind/origins/origins-header.jpg";
import CaseStudyBody from "../components/CaseStudyBody";

const Origins = () => {
  const MotionBox = motion(Box);

  return (
    <Box>
      <Box marginY="2rem">
        <Heading variant="h1" as="h1" textAlign="center">
          <Typewriter
            options={{
              strings: "Origins Case Study",
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
          backgroundImage={OriginsHeader}
          layoutId="case-study-image-3"
          transition={{ ease: easeIn, duration: 0.8 }}
          height="85vh"
          backgroundSize="cover"
          backgroundPosition="center top"
        />
      </Box>
      <CaseStudyBody />
    </Box>
  );
};

export default Origins;
