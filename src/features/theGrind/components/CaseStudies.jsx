import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  background,
} from "@chakra-ui/react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";
import NbaLogo from "../../../assets/theGrind/Nba_Africa/NBA_Africa_Logo.svg";
import JffLogo from "../../../assets/theGrind/jff/JFF_Logo.svg";
import MultichoiceLogo from "../../../assets/theGrind/Multichoice/Multichoice_Logo.svg";
import JffHeader from "../../../assets/theGrind/jff/JFF_Header.png";
import { Links } from "../../../styles/Navbar.style";

const CaseStudies = () => {
  const activeCaseStudies = [
    {
      clientName: "NBA",
      clientLogo: "nba-africa.png",
      url: "/the-grind/nba",
    },
    {
      clientName: "JFF",
      clientLogo: "jff.png",
      url: "/the-grind/jff",
    },
    {
      clientName: "multiChoice",
      clientLogo: "multichoice.png",
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
      lg: "300px",
      xl: "350px",
    },
    height: {
      base: "200px",
      sm: "200px",
      md: "200px",
      lg: "200px",
      xl: "233px",
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
    <Box marginY="4rem" marginX="2rem">
      <Heading variant="h3" as="h3" textAlign="center" paddingBottom="2rem">
        Case Studies
      </Heading>
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
        gap={{ sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
      >
        <LinkBox as="ReachLink">
          <Box
            className="single-case-study-container"
            sx={singleCaseStudyContainer}
          >
            <Box>
              <Image
                src={NbaLogo}
                width={{
                  base: "300px",
                  sm: "300px",
                  md: "300px",
                  lg: "300px",
                  xl: "350px",
                }}
                height={{
                  base: "150px",
                  sm: "150px",
                  md: "150px",
                  lg: "200px",
                  xl: "200px",
                }}
                marginBottom="0.5rem"
                _hover={{
                  content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                  width: {
                    base: "300px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                    xl: "350px",
                  },
                }}
              />
              <Links>Explore</Links>
            </Box>
          </Box>
        </LinkBox>

        <Link to="/the-grind/jff">
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
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                    xl: "350px",
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
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                    xl: "350px",
                  },
                }}
              />
              <Links>Explore</Links>
            </Box>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default CaseStudies;
