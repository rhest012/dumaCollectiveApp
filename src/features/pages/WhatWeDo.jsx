import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WhatWeDoClients from "../components/WhatWeDoClients";
import ServiceList from "../components/ServiceList";
import { useLocation } from "react-router-dom";
import PageIntro from "../theGrind/components/pageIntro";

const WhatWeDo = () => {
  const imageStyling = {
    borderRadius: "0.5rem",
  };

  const location = useLocation();
  const pageLocation = location.pathname;

  return (
    <Box>
      <WhatWeDoClients />
      <ServiceList />
    </Box>
  );
};

export default WhatWeDo;
