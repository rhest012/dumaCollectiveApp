import React, { useState } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useFetchFirebase } from "../../actions/useFetchFirebase";

import { easeIn, motion } from "framer-motion";
import SecondaryPageHeader from "../components/SecondaryPageHeader";

const SquadList = () => {
  const containerStyle = {
    // height: { base: "auto", sm: "auto", md: "auto", lg: "100vh", xl: "80vh" },
    margin: "4rem 2rem 2rem 2rem",
  };

  const staffHeadingStyle = {
    textAlign: {
      base: "center",
      sm: "center",
      md: "left",
      lg: "left",
      xl: "left",
    },
  };

  const imageCaption = {
    textAlign: "center",
    pt: "0.25rem",
  };

  // Framer Motion
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  const subHeadingVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
    },
  };

  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
    },
    hover: {
      scale: 1.05,
      duration: 2,
    },
  };

  const data = useFetchFirebase("staff");

  return (
    <>
      {data && (
        <Box sx={containerStyle}>
          <Flex
            className="staff-text-container"
            flexDirection="column"
            justifyContent="center"
            flexWrap={{
              base: "wrap",
              sm: "wrap",
              md: "wrap",
              lg: "no-wrap",
              xl: "no-wrap",
            }}
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
            paddingTop={{
              base: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "0",
              xl: "0",
            }}
          >
            <SecondaryPageHeader />
          </Flex>
          <Box>
            {data !== null &&
              data.map((staff, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  marginY="1.5rem"
                >
                  <MotionHeading
                    sx={staffHeadingStyle}
                    variants={subHeadingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                    variant="h3"
                    paddingBottom="0"
                  >
                    {staff.aka}
                  </MotionHeading>
                  <MotionText
                    variant="p"
                    fontSize="1.25rem"
                    paddingBottom="1rem"
                    sx={staffHeadingStyle}
                    variants={subHeadingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                  >
                    {staff.department}{" "}
                  </MotionText>
                  <Flex
                    className="staff-image-container"
                    flexDir="row"
                    width="100%"
                    flexWrap="wrap"
                    gap="1.5rem"
                  >
                    {staff.staffMembers.map((staffMember, index) => (
                      <Box key={index} className="staff-container">
                        {" "}
                        <Flex
                          flexDirection={{
                            base: "column",
                            sm: "column",
                            md: "column",
                            lg: "row",
                            xl: "row",
                          }}
                          alignItems="center"
                          width="auto"
                        >
                          <MotionBox
                            overflow="hidden"
                            borderRadius="1rem"
                            className="image-container"
                            variants={imageContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                              once: true,
                            }}
                          >
                            <MotionImage
                              className="staff__image"
                              key={index}
                              src={require(`../../assets/squad/squadOri/${staffMember.image}`)}
                              borderRadius="1rem"
                              w="239px"
                              h="181px"
                              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                              transition="all  0.7s ease"
                              variants={imageChildVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{
                                once: true,
                              }}
                              exit="exit"
                              whileHover="hover"
                              _hover={{
                                content: `url(${require(`../../assets/squad/squadHover/${staffMember.image}`)})`,
                                w: "239px",
                                h: "181px",
                              }}
                            />
                          </MotionBox>
                        </Flex>
                        <Text className="staff__text" sx={imageCaption}>
                          {staffMember.aka}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>
              ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default SquadList;
