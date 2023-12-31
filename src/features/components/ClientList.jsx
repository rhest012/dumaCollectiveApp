import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { useFetchFirebase } from "../../actions/useFetchFirebase";
import { motion } from "framer-motion";

const ClientList = () => {
  const data = useFetchFirebase("clients");

  // Framer Motion
  const MotionImage = motion(Image);
  const MotionFlex = motion(Flex);
  const MotionGridItem = motion(GridItem);
  const MotionBox = motion(Box);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1.5,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    hover: {
      scale: 1.1,
      duration: 3,
    },
  };

  return (
    <>
      {data && (
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            xl: "repeat(5,1fr)",
          }}
          marginBottom="4rem"
          className="client-grid"
          marginX="auto"
        >
          {data.map((item, index) => (
            <MotionGridItem
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginY="1rem"
            >
              <MotionFlex
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                variants={imageContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="image-container"
                width={{
                  base: "130px",
                  sm: "130px",
                  md: "150px",
                  lg: "200px",
                  xl: "200px",
                }}
                height={{
                  base: "130px",
                  sm: "130px",
                  md: "150px",
                  lg: "200px",
                  xl: "200px",
                }}
              >
                <MotionImage
                  className="client-logo-image"
                  variants={imageChildVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  src={require(`../../assets/theGrind/clientLogos/${item.clientLogo}`)}
                  width="200px"
                  layoutId="case-study-image"
                />
              </MotionFlex>
            </MotionGridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ClientList;
