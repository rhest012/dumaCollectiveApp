import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";

// actions
import SquadList from "../components/SquadList";
import transition from "../components/transition";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const Squad = () => {
  // Page Location

  return (
    <Box marginY="3rem" marginX="2rem">
      <Helmet>
        <title> Squad</title>
        <meta
          name="description"
          content="Our people, our heart...
          Dumarians who are doing epic sh*t to redefine creative communications in Africa."
        />
        <link rel="canonical" href="/git" />
      </Helmet>
      <SquadList />
    </Box>
  );
};

export default transition(Squad);
