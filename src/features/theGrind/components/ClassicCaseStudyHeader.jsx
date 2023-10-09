import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import PlaceHolderImage from "../../../assets/theGrind/boity/Boity Case Study 1.jpg";
import { easeIn, motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const ClassicCaseStudyHeader = ({ activeCaseStudy }) => {
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  return (
    <Box>
      <Box marginY="2rem">
        <Heading
          variant="h1"
          as="h1"
          textAlign="center"
          textTransform="uppercase"
        >
          <Typewriter
            options={{
              strings: activeCaseStudy.name,
              autoStart: true,
              delay: 25,
              pauseFor: 2000000,
              cursor: "",
            }}
          />
        </Heading>
        <Flex
          marginTop="1rem"
          marginBottom="2rem"
          //   minHeight="92vh"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {activeCaseStudy?.images.map((caseStudyImage, index) => (
            <MotionImage
              key={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              // layoutId={caseStudy.id}
              src={require(`../../../assets/theGrind/${activeCaseStudy.id}/${caseStudyImage}`)}
              height={{
                base: "400px",
                sm: "400px",
                md: "400px",
                lg: "350px",
                xl: "400px",
              }}
              marginBottom="0.5rem"
              layoutId="case-study-image-1"
              transition={{ ease: easeIn, duration: 0.8 }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ClassicCaseStudyHeader;
