import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  Text,
  background,
} from "@chakra-ui/react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const CaseStudies = () => {
  const activeCaseStudies = [
    {
      clientName: "NBA",
      image: "nba-africa-square.png",
      url: "/the-grind/nba-africa",
      id: "case-study-image-1",
    },
    {
      clientName: "JFF",
      image: "jff-square.png",
      url: "/the-grind/jff",
      id: "case-study-image-2",
    },
    {
      clientName: "multiChoice",
      image: "multichoice-square.jpg",
      url: "/the-grind/multichoice",
      id: "case-study-image-3",
    },
    {
      clientName: "Boity",
      image: "boity-square.png",
      url: "/the-grind/boity",
      id: "case-study-image-3",
    },
    {
      clientName: "Heineken",
      image: "heineken-square.jpg",
      url: "/the-grind/heineken",
      id: "case-study-image-3",
    },
    {
      clientName: "Uefa",
      image: "eufa-square.png",
      url: "/the-grind/eufa",
      id: "case-study-image-3",
    },
  ];

  // Framer Motion
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);

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
      duration: 2,
    },
  };
  const captionChildVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,

        delay: 1.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <Box>
      <Flex
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
          xl: "space-between",
        }}
        alignItems="center"
        wrap="wrap"
      >
        {activeCaseStudies?.map((caseStudy, index) => (
          <Link
            to={caseStudy.url}
            as="ReachLink"
            key={index}
            className="case-study-container"
          >
            <MotionBox
              marginY={{ base: "1.5rem", xl: "0" }}
              height={{
                base: "350px",
                sm: "350px",
                md: "350px",
                lg: "350px",
                xl: "400px",
              }}
              width={{
                base: "350px",
                sm: "350px",
                md: "350px",
                lg: "350px",
                xl: "400px",
              }}
              overflow="hidden"
              className="image-container"
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
            >
              <MotionImage
                variants={imageChildVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                layoutId={caseStudy.id}
                src={require(`../../../assets/theGrind/caseStudies/${caseStudy.image}`)}
                height={{
                  base: "350px",
                  sm: "350px",
                  md: "350px",
                  lg: "350px",
                  xl: "400px",
                }}
                marginBottom="0.5rem"
              />
            </MotionBox>
            <MotionHeading
              className="menu-item"
              variants={captionChildVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              variant="h3"
              fontSize="1rem"
              textTransform="uppercase"
              textAlign="center"
              paddingTop="2rem"
              marginBottom="2rem"
            >
              Explore
            </MotionHeading>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default CaseStudies;
