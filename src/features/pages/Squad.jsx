import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";

// actions

import { useLocation } from "react-router-dom";
import PageIntro from "../theGrind/components/pageIntro";
import SecondaryHeader from "../components/SecondaryHeader";
import SquadList from "../components/SquadList";
import transition from "../components/transition";

const Squad = () => {
  // Page Location
  const location = useLocation();
  const pageLocation = location.pathname;

  return (
    <>
      <SquadList />
    </>
  );
};

export default transition(Squad);
