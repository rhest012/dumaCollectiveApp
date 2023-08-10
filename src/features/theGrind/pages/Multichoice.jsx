import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

import MultichoiceHeader from "../../../assets/theGrind/Multichoice/MCG_Header.png";
import MultichoiceReachCard from "../components/MultichoiceReachCard";

const Multichoice = () => {
  const singleAnnualSocialStyle = {
    fontFamily: "Fira Condensed",
    width: "100%",
    borderRadius: "2rem",
    px: "1.5rem",
    py: "1rem",
  };

  const AnnualSocialStyle = {
    fontSize: "1.25rem",
    lineHeight: "1.6rem",
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "300",
  };

  const statDescriptionStyle = {
    fontFamily: "Fira Sans Condensed",
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <Box>
      <Box marginY="2rem">
        <Heading variant="h1" as="h1" textAlign="center">
          Multichoice Case Study
        </Heading>
        <Box
          marginTop="1rem"
          marginBottom="4rem"
          backgroundImage={MultichoiceHeader}
          height="92vh"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <MultichoiceReachCard />
      </Box>
    </Box>
  );
};

export default Multichoice;
