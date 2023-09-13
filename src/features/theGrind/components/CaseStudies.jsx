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

const CaseStudies = () => {
  const activeCaseStudies = [
    {
      clientName: "NBA",
      image: "nba-africa-square.png",
      url: "/the-grind/nba",
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

  const singleCaseStudyContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: {
      base: "300px",
      sm: "300px",
      md: "300px",
      lg: "350px",
      xl: "350px",
    },
    height: {
      base: "300px",
      sm: "300px",
      md: "300px",
      lg: "350px",
      xl: "350px",
    },
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  const caseStudyImage = {
    width: {
      base: "300px",
      sm: "300px",
      md: "300px",
      lg: "300px",
      xl: "350px",
    },
    marginBottom: "0.5rem",
    _hover: {
      width: {
        base: "300px",
        sm: "300px",
        md: "300px",
        lg: "300px",
        xl: "350px",
      },
    },
  };
  return (
    <Box marginY="3rem" marginX="2rem">
      <Heading variant="h2" as="h3">
        Our Work Never Stops
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
            <Box
              className="single-case-study-container"
              // sx={singleCaseStudyContainer}
              marginY={{ base: "1.5rem", xl: "0" }}
            >
              <Image
                // src={NbaLogo}
                src={require(`../../../assets/theGrind/caseStudies/${caseStudy.image}`)}
                height={{
                  base: "350px",
                  sm: "350px",
                  md: "350px",
                  lg: "400px",
                  xl: "400px",
                }}
                marginBottom="0.5rem"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              />
              <Links>Explore</Links>
            </Box>
          </Link>
        ))}

        {/* <Link to="/the-grind/jff">
          <Box
            className="single-case-study-container"
            sx={singleCaseStudyContainer}
          >
            <Box>
              <Image
                // src={activeCaseStudy.clientLogo}
                src={JffLogo}
                // src={require(`../../../assets/theGrind/caseStudies/${activeCaseStudy.clientLogo}`)}
                width={{
                  base: "300px",
                  sm: "300px",
                  md: "300px",
                  lg: "300px",
                  xl: "350px",
                }}
                height="200px"
                marginBottom="0.5rem"
                _hover={{
                  content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,

                  width: {
                    base: "300px",
                    sm: "350px",
                    md: "400px",
                    lg: "400px",
                    xl: "420px",
                  },
                }}
              />
              <Links>Explore</Links>
            </Box>
          </Box>
        </Link>

        <Link to="/the-grind/multichoice">
          <Box
            className="single-case-study-container"
            sx={singleCaseStudyContainer}
          >
            <Box>
              <Image
                src={MultichoiceLogo}
                width={{
                  base: "300px",
                  sm: "300px",
                  md: "300px",
                  lg: "300px",
                  xl: "350px",
                }}
                height="200px"
                marginBottom="0.5rem"
                _hover={{
                  content: `url(${require(`../../../assets/theGrind/Multichoice/MCG_Header.png`)})`,
                  width: {
                    base: "300px",
                    sm: "350px",
                    md: "400px",
                    lg: "400px",
                    xl: "420px",
                  },
                }}
              />
              <Links>Explore</Links>
            </Box>
          </Box>
        </Link> */}
      </Flex>
    </Box>
  );
};

export default CaseStudies;
