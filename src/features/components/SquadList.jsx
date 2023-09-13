import React, { useState } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useFetchFirebase } from "../../actions/useFetchFirebase";

import { easeIn, motion } from "framer-motion";

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
  const MotionFlex = motion(Flex);
  const MotionImage = motion(Image);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const singleImageChildVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // Fetch Data
  // const data = useFetch("http://localhost:8000/staff");
  const data = useFetchFirebase("staff");
  // console.log(newData);

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
            <Heading variant="h2">Our people, our heart.</Heading>
            <Text marginBottom="2rem" variant="p">
              The people that make epic sh*t happen, the people redefining
              creative communications.
            </Text>
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
                  <Heading
                    sx={staffHeadingStyle}
                    variant="h3"
                    paddingBottom="0"
                  >
                    {staff.aka}
                  </Heading>
                  <Text variant="p" fontSize="1.25rem" paddingBottom="1rem">
                    {staff.department}{" "}
                  </Text>
                  <Flex
                    className="staff-image-container"
                    flexDir="row"
                    width="100%"
                    flexWrap="wrap"
                    gap="1.5rem"
                  >
                    {staff.staffMembers.map((staffMember, index) => (
                      <Box key={index}>
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
                          className="staff-container"
                          width="auto"
                          variants={imageContainerVariants}
                          initial="hidden"
                          animate="visible"
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
                            variants={singleImageChildVariants}
                            initial="hidden"
                            animate="visible"
                            _hover={{
                              content: `url(${require(`../../assets/squad/squadHover/${staffMember.image}`)})`,
                              w: "239px",
                              h: "181px",
                            }}
                          />
                        </Flex>
                        <Text sx={imageCaption}>{staffMember.aka}</Text>
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
