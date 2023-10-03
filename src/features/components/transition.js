import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const transition = (Component) => {
  const MotionBox = motion(Box);
  return () => (
    <>
      <Component />

      <MotionBox
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
      />
      

      <MotionBox
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, easy: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
