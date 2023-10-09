import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ClassicCaseStudyDescription = ({ activeCaseStudy }) => {
  return (
    <Box className="case-study-description" margin="2rem 0">
      <Text variant="p">{activeCaseStudy.description}</Text>
    </Box>
  );
};

export default ClassicCaseStudyDescription;
