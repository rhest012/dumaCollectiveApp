import React from "react";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import { Box, Text } from "@chakra-ui/react";
import ReviewForm from "../components/ReviewForm";

const PerformanceReview = () => {
  return (
    <Box margin="3rem 2rem">
      <SecondaryPageHeader />
      <ReviewForm />
    </Box>
  );
};

export default PerformanceReview;
