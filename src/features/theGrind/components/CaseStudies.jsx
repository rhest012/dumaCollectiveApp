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
import { Link, Link as ReachLink, useLocation } from "react-router-dom";
import React from "react";
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
        {activeCaseStudies.map((activeCaseStudy, index) => (
          <LinkBox as="ReachLink" to={activeCaseStudy.url} key={index}>
            <Box
              className="single-case-study-container"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={{
                base: "300px",
                sm: "300px",
                md: "300px",
                lg: "300px",
                xl: "350px",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Box>
                <Image
                  // src={activeCaseStudy.clientLogo}
                  src={require(`../../../assets/theGrind/caseStudies/${activeCaseStudy.clientLogo}`)}
                  height={{
                    base: "150px",
                    sm: "150px",
                    md: "150px",
                    lg: "150px",
                    xl: "175px",
                  }}
                  _hover={{
                    content: `url(${require(`../../../assets/theGrind/jff/JFF_Header.png`)})`,
                    width: "100%",
                  }}
                />
                <Links>Explore</Links>
              </Box>
            </Box>
          </LinkBox>
        ))}
      </Flex>
    </Box>
  );
};

export default CaseStudies;
