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
import NbaLogo from "../../../assets/theGrind/caseStudies/nba-africa-square.png";
import JffLogo from "../../../assets/theGrind/jff/JFF_Logo.svg";
import MultichoiceLogo from "../../../assets/theGrind/Multichoice/Multichoice_Logo.svg";
import JffHeader from "../../../assets/theGrind/jff/JFF_Header.png";
import { Links } from "../../../styles/Navbar.style";
import { motion } from "framer-motion";

const CaseStudies = () => {
  const activeCaseStudies = [
    {
      clientName: "NBA",
      image: "nba-africa-square.png",
      url: "/the-grind/nba-africa",
    },
    {
      clientName: "JFF",
      image: "jff-square.png",
      url: "/the-grind/jff",
    },
    {
      clientName: "multiChoice",
      image: "multichoice-square.jpg",
      url: "/the-grind/multichoice",
    },
  ];

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
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    hover: {
      scale: 1.05,
      duration: 2,
    },
  };

  return (
    <Box marginY="3rem" marginX="2rem">
      <Heading variant="h2" as="h3">
        Our Work Never Stops...
      </Heading>
      <Text variant="p" margin="-1rem 0 4rem 0">
        To redefine creative communications, we approach our work to achieve
        long-term objectives - to create sustainable brand communications that
        last.
      </Text>
      {/* <Text >To redefine creative communications.</Text> */}
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
      >
        {activeCaseStudies?.map((caseStudy, index) => (
          <Link to={caseStudy.url} as="ReachLink" key={index}>
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
              <Links>Explore</Links>
            </MotionBox>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default CaseStudies;
