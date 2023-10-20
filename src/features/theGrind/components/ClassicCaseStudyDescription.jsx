import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

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

  // Page Location
  const location = useLocation();

  return (
    <>
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
    </>
  );
};

export default ClassicCaseStudyDescription;
