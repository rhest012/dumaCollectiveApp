import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const ClassicCaseStudyDescription = ({ activeCaseStudy }) => {
  const MotionText = motion(Text);
  const captionChildVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,

        delay: 1.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <Box className="case-study-description" margin="2rem 0">
      <MotionText
        variant="p"
        variants={captionChildVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          dangerouslySetInnerHTML={{ __html: activeCaseStudy.description }}
        />
      </MotionText>
    </Box>
  );
};

export default ClassicCaseStudyDescription;
