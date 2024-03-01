import React from "react";
import EntertainmentComitteeForm from "../components/EntertainmentComitteeForm";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import { Box } from "@chakra-ui/react";

const EntertainmentCommittee = () => {
  return (
    <Box margin="2rem">
      <SecondaryPageHeader />
      <EntertainmentComitteeForm />
    </Box>
  );
};

export default EntertainmentCommittee;
