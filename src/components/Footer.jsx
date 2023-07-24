import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Framer Motion
  const MotionBox = motion(Box);
  const MotionText = motion(Text);

  return (
    <MotionBox
      background="brand.900"
      width="100%"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <MotionText variant="p" paddingY="1rem" color="#fff" textAlign="center">
        &copy; {new Date().getFullYear()} Duma Collective. All rights reserved.
      </MotionText>
    </MotionBox>
  );
};

export default Footer;
