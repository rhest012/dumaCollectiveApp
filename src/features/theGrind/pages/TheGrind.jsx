import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import useFetch from "../../../actions/useFetchData";
import { Link, Link as ReachLink, useLocation } from "react-router-dom";
import SocialIconsHorizontal from "../../components/SocialIconsHorizontal";
import CaseStudies from "../components/CaseStudies";

import { useRef } from "react";

import { useScroll, motion } from "framer-motion";

const TheGrind = () => {
  // const { data, error, isPending } = useFetch(" http://localhost:8000/clients");

  const data = useFetchFirebase("clients");

  // Page Location
  const location = useLocation();
  const pageLocation = location.pathname;

  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const MotionGridItem = motion(GridItem);

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

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  return (
    <>
      {data && (
        <Box>
          <Grid
            margin={{
              base: "4rem 2rem",
              md: "4rem 2rem",
              lg: "4rem 2rem 8rem 2rem",
              xl: " 4rem 2rem 8rem 2rem",
            }}
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr",
              base: "1fr",
              lg: "40%,60%",
              xl: "40% 60%",
            }}
            // height={{"83vh"}}
          >
            <GridItem marginRight={{ base: "0", lg: "2rem", xl: "2rem" }}>
              <MotionBox
                className="client-outer-container"
                ref={targetRef}
                display="flex"
                flexDir="column"
                height="100%"
                // marginRight={{
                //   base: "0",
                //   sm: "0",
                //   md: "0",
                //   lg: "2rem",
                //   xl: "2rem",
                // }}
                flexWrap="wrap"
                // justifyContent="center"
              >
                <MotionHeading
                  variant="h2"
                  as="h2"
                  pathLength="1"
                  marginTop="2rem"
                  style={{ pathLength: scrollYProgress }}
                >
                  A BIG Shout out to our clients
                </MotionHeading>
                <Text
                  variant="p"
                  as="p"
                  paddingY={{
                    base: "1rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "1rem",
                    xl: "1rem",
                  }}
                >
                  We wear our pride on our sleeves as we cater to an array of
                  clients in the advertising and entertainment industry. From
                  dynamic production houses to forward-thinking entertainment
                  companies, we're the go-to destination for those seeking the
                  next big thing.
                </Text>
                <SocialIconsHorizontal />
              </MotionBox>
            </GridItem>
            <GridItem
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap="2rem"
            >
              {data.map((item, index) => (
                <MotionGridItem
                  className="image-container"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                  width="250px"
                  height="250px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  variants={imageContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <MotionImage
                    className="image"
                    src={require(`../../../assets/theGrind/clientLogos/${item.clientLogo}`)}
                    width="225px"
                    key={index}
                    variants={imageChildVariants}
                  />
                </MotionGridItem>
              ))}
            </GridItem>
          </Grid>
        </Box>
      )}
      <CaseStudies />
    </>
  );
};

export default TheGrind;
