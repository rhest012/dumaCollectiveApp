import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WhatWeDoClients from "../components/WhatWeDoClients";
import ServiceList from "../components/ServiceList";
import { useLocation } from "react-router-dom";
import transition from "../components/transition";
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import { Helmet } from "react-helmet-async";

const WhatWeDo = () => {
  return (
    <>
      <Helmet>
        <title>What we Do</title>
        <meta
          name="description"
          content="We do epic sh*t, for epic brands... To redefine creative communications."
        />
        <link rel="canonical" href="/git" />
      </Helmet>
      <Box marginY="3rem" marginX="2rem">
        <SecondaryPageHeader />
        <WhatWeDoClients />
        <ServiceList />
      </Box>
    </>
  );
};

export default transition(WhatWeDo);
