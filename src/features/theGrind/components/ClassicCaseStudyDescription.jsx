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

  console.log(activeCaseStudy);

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
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "50% 50%" }}
        marginY="2rem"
        gap="2rem"
      >
        {activeCaseStudy?.videos
          ? activeCaseStudy.videos.map((caseStudy, index) => (
              <GridItem
                width={{
                  base: "300px",
                  md: "400px",
                  lg: "600px",
                  xl: "640px",
                }}
                height={{
                  base: "200px",
                  md: "500px",
                  lg: "600px",
                  xl: "640px",
                }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <ReactPlayer
                  className="video-player"
                  // controls={true}
                  url={caseStudy}
                  // width={{
                  //   base: "300px",
                  //   md: "400px",
                  //   lg: "600px",
                  //   xl: "640px",
                  // }}
                  // height="620px"
                  loop={true}
                  playing={true}
                  muted={true}
                />
              </GridItem>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ClassicCaseStudyDescription;
