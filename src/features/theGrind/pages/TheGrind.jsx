import { Box } from "@chakra-ui/react";
import CaseStudies from "../components/CaseStudies";
import transition from "../../components/transition";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";

const TheGrind = () => {
  return (
    <Box marginY="3rem" marginX="2rem">
      <SecondaryPageHeader />
      <CaseStudies />
    </Box>
  );
};

export default transition(TheGrind);
