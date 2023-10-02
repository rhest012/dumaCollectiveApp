import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ClientList from "./ClientList";

const WhatWeDoClients = () => {
  return (
    <Box margin="2rem 2rem 4rem 2rem">
      <Heading variant="h2">We do epic sh*t, for epic brands...</Heading>
      <Text margin="-1rem 0 3rem 0">To redefine creative communications.</Text>
      <ClientList />
    </Box>
  );
};

export default WhatWeDoClients;
