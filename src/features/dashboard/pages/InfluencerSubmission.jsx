import React from "react";
import { Box } from "@chakra-ui/react";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import InfluencerRegistrationForm from "../components/InfluencerRegistrationForm";
import transition from "../../components/transition";
import { Helmet } from "react-helmet-async";

const InfluencerSubmission = () => {
  return (
    <>
      <Helmet>
        <title>Influencer Portal</title>
        <meta
          name="description"
          content="Our mission is to bridge the gap between influencers and brands, providing a seamless way to collaborate and create memorable campaigns"
        />
        <link rel="canonical" href="/influencers" />
      </Helmet>
      <Box className="body-container">
        <InfluencerRegistrationForm />
      </Box>
    </>
  );
};

export default transition(InfluencerSubmission);
