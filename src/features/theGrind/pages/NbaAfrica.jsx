import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import NbaAfricaHeaderImage from "../../../assets/theGrind/Nba_Africa/NBA-Africa-Header.jpg";
import NbaCaseStudy from "../components/NbaCaseStudy";
import NbaEvaluation from "../components/NbaEvaluation";

const NbaAfrica = () => {
  return (
    <Box>
      <Box marginY="2rem">
        <Heading variant="h1" as="h1" textAlign="center">
          NBA Africa Case Study
        </Heading>
        <Box
          marginTop="1rem"
          marginBottom="4rem"
          backgroundImage={NbaAfricaHeaderImage}
          height="92vh"
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Box>
      <NbaCaseStudy />
      <NbaEvaluation />
    </Box>
  );
};

export default NbaAfrica;
