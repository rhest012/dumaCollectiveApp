import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";

// actions
import SquadList from "../components/SquadList";
import transition from "../components/transition";
import { Box } from "@chakra-ui/react";

const Squad = () => {
  // Page Location

  return (
    <Box marginY="3rem" marginX="2rem">
      <SquadList />
    </Box>
  );
};

export default transition(Squad);
