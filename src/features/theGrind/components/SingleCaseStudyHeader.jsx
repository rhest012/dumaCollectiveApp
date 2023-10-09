import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import JffHeader from "../../../assets/theGrind/caseStudies/headers/JFF_Header.png";

const SingleCaseStudyHeader = () => {
  // Content
  const caseStudies = [
    {
      clientName: "NBA",
      image: "NBA-Africa-Header.jpg",
      url: "/the-grind/nba-africa",
      id: "case-study-image-1",
    },
    {
      clientName: "JFF",
      image: "JFF_Header.png",
      url: "/the-grind/jff",
      id: "case-study-image-2",
    },
    {
      clientName: "multiChoice",
      image: "MCG_Header.png",
      url: "/the-grind/multichoice",
      id: "case-study-image-3",
    },
  ];

  //   Page Location
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const currentPage = caseStudies.find(
      (caseStudy) => caseStudy.url === location.pathname
    );

    if (currentPage) {
      setActivePage(currentPage);
    }
  }, []);

  //   console.log(activePage);
  // Framer Motion
  const MotionBox = motion(Box);
  return (
    <>
      {activePage && (
        <>
          <Box marginTop="1rem">
            <Heading variant="h1" as="h1" textAlign="center">
              <Typewriter
                options={{
                  strings: "JFF Case Study",
                  autoStart: true,
                  delay: 25,
                  pauseFor: 2000000,
                  cursor: "",
                }}
              />
            </Heading>
          </Box>
          <MotionBox
            marginTop="1rem"
            marginBottom="4rem"
            backgroundImage={require(`../../../assets/theGrind/caseStudies/headers/${activePage.image}`)}
            height="92vh"
            backgroundSize="cover"
            backgroundPosition="center"
            // layoutId={activePage.id}
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          />
        </>
      )}
    </>
  );
};

export default SingleCaseStudyHeader;
