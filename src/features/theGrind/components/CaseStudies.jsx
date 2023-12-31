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
      clientName: "origins",
      image: "origins-square.jpg",
      url: "/the-grind/origins",
      id: "case-study-image-3",
    },
    {
      clientName: "Chivas",
      image: "chivas-square.jpg",
      url: "/the-grind/chivas",
      id: "case-study-image-4",
    },
    {
      clientName: "Honor",
      image: "honor-square.jpg",
      url: "/the-grind/honor",
      id: "case-study-image-4",
    },
    {
      clientName: "Heineken",
      image: "heineken-square.jpg",
      url: "/the-grind/heineken",
      id: "case-study-image-5",
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
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
      >
        {activeCaseStudies?.map((caseStudy, index) => (
          <GridItem key={index} display="flex" justifyContent="center">
            <Link
              to={caseStudy.url}
              as="ReachLink"
              key={index}
              className="case-study-container"
            >
              <MotionBox
                marginY={{ base: "1.5rem", xl: "0" }}
                height={{
                  base: "300px",
                  sm: "400px",
                  md: "350px",
                  lg: "400px",
                  xl: "400px",
                }}
                width={{
                  base: "300px",
                  sm: "400px",
                  md: "350px",
                  lg: "400px",
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
                    base: "300px",
                    sm: "400px",

                    lg: "400px",
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
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;
