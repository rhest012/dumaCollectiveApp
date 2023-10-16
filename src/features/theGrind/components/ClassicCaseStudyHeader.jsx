import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import PlaceHolderImage from "../../../assets/theGrind/boity/Boity Case Study 1.jpg";
import { easeIn, motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const ClassicCaseStudyHeader = ({ activeCaseStudy }) => {
  // Framer Motion

  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 1, // Initial scale
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Initial scale
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
        delay: 1.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const imageChildVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    hidden: {
      opacity: 0,
      y: -200,
    },
    hover: {
      scale: 1.05,
      duration: 1,
    },
  };
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
            <MotionBox
              height={{
                base: "400px",
                sm: "400px",
                md: "400px",
                lg: "350px",
                xl: "400px",
              }}
              width={{
                base: "400px",
                sm: "400px",
                md: "400px",
                lg: "350px",
                xl: "400px",
              }}
              overflow="hidden"
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              marginBottom={{ base: "2rem", lg: "0" }}
            >
              <MotionImage
                key={index}
                variants={imageChildVariants}
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
                layoutId={activeCaseStudy.imageId}
                transition={{ ease: easeIn, duration: 0.8 }}
              />
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ClassicCaseStudyHeader;
