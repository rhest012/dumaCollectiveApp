import React from "react";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import { Box, Text } from "@chakra-ui/react";
import ReviewForm from "../components/ReviewForm";
import { Helmet } from "react-helmet-async";
import transition from "../../components/transition";

const PerformanceReview = () => {
  return (
    <>
      <Helmet>
        <title>Employee Review</title>
        <meta name="description" content="Employee Review" />
        <link rel="canonical" href="/employees" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box className="body-container">
        <SecondaryPageHeader />
        <ReviewForm />
      </Box>
    </>
  );
};

export default PerformanceReview;
