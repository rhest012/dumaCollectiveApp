import React from "react";
import { Box } from "@chakra-ui/react";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import InfluencerRegistrationForm from "../components/InfluencerRegistrationForm";
import transition from "../../components/transition";

const InfluencerSubmission = () => {
  return (
    <Box margin="4rem 2rem">
      {/* <SecondaryPageHeader /> */}
      <InfluencerRegistrationForm />
    </Box>
  );
};

export default transition(InfluencerSubmission);
