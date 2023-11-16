import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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

  return (
    <>
      <Box className="case-study-description" margin="2rem 0">
        <MotionText
          variant="p"
          variants={captionChildVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{
            once: true,
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: activeCaseStudy.description }}
          />
        </MotionText>
      </Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1f", xl: "50% 50%" }}
        marginY="2rem"
        gap="1rem"
      >
        {activeCaseStudy?.videos
          ? activeCaseStudy.videos.map((caseStudy, index) => (
              <GridItem
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                // maxWidth={{ base: "87vw", lg: "600px", xl: "640px" }}
                // marginY="1rem"
              >
                <Flex
                  style={{ aspectRatio: "16/9" }}
                  justifyContent="center"
                  margin={{
                    base: "2rem 0rem 4rem 0rem",
                    lg: "2rem 4rem 4rem 4rem",
                  }}
                  width="100%"
                >
                  <ReactPlayer
                    className="video-player"
                    controls
                    url={caseStudy}
                    // muted
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    muted={true}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 0, modestbranding: 1 },
                      },
                    }}
                  />
                </Flex>
              </GridItem>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ClassicCaseStudyDescription;
