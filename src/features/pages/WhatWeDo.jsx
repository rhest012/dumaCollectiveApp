import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WhatWeDoClients from "../components/WhatWeDoClients";
import ServiceList from "../components/ServiceList";
import { useLocation } from "react-router-dom";
import transition from "../components/transition";
import SecondaryPageHeader from "../components/SecondaryPageHeader";

const WhatWeDo = () => {
  return (
    <Box marginY="3rem" marginX="2rem">
      <SecondaryPageHeader />
      <WhatWeDoClients />
      <ServiceList />
    </Box>
  );
};

export default transition(WhatWeDo);
