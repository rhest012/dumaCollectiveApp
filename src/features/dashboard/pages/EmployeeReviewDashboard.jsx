import { Box } from "@chakra-ui/react";
import React from "react";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import PerformanceReviewAccordion from "../components/PerformanceReviewAccordion";
import { Helmet } from "react-helmet-async";

const EmployeeReviewDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Employee Review Dashboard</title>
        <meta name="description" content="Employee Dashboard" />
        <link rel="canonical" href="/employees" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box className="body-container">
        <SecondaryPageHeader />
        <PerformanceReviewAccordion />
      </Box>
    </>
  );
};

export default EmployeeReviewDashboard;
