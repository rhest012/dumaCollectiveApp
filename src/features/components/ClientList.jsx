import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useFetchFirebase } from "../../actions/useFetchFirebase";
import { motion } from "framer-motion";

const ClientList = () => {
  const data = useFetchFirebase("clients");

  // Framer Motion
  //   const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  };

  return (
    <>
      {data && (
        <Box
          width="100%"
          display="flex"
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems="center"
          flexWrap="wrap"
          gap="2rem"
        >
          {data.map((item, index) => (
            <MotionBox
              className="image-container"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              key={index}
              width="210px"
              height="210px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Image
                className="image"
                src={require(`../../assets/theGrind/clientLogos/${item.clientLogo}`)}
                width="200px"
                key={index}
                variants={imageChildVariants}
              />
            </MotionBox>
          ))}
        </Box>
      )}
    </>
  );
};

export default ClientList;
