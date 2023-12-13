import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

const SecondaryPageHeader = () => {
  //Heading Content
  const headings = [
    {
      name: "What We Do",
      heading: "We do epic sh*t, for epic brands...",
      description: "To redefine creative communications.",
      url: "/what-we-do",
    },
    {
      name: "The Grind",
      heading: "Our Work Never Stops...",
      description:
        "The hustle never ends, but it's all in a day's work to ensure your brands impact lasts a lifetime.",
      url: "/the-grind",
    },
    {
      name: "The Squad",
      heading: "Our people, our heart...",
      description:
        "Dumarians who are doing epic sh*t to redefine creative communications in Africa.",
      url: "/the-squad",
    },
    {
      name: "The Buzz",
      heading: "Our people, our heart...",
      description:
        "The people that make epic sh*t happen, the people redefining creative communications.",
      url: "/the-buzz",
    },
    {
      name: "Influencer Portal",
      heading: "Our people, our heart...",
      description:
        "The people that make epic sh*t happen, the people redefining creative communications.",
      url: "/influencers",
    },
    {
      name: "Employee Peer Review",
      heading: "Employee Performance Review",
      description:
        "The people that make epic sh*t happen, the people redefining creative communications...",
      url: "/performance-review",
    },
    {
      name: "Employee Dashboard",
      heading: "Employee Review Dashboard",
      description:
        "The people that make epic sh*t happen, the people redefining creative communications...",
      url: "/employees",
    },
  ];

  // Page Location
  const location = useLocation();

  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const matchingPage = headings.find(
      (heading) => heading.url === location.pathname
    );

    setActivePage(matchingPage);
  }, []);

  // Framer Motion
  const MotionText = motion(Text);
  const textDescriptionVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 1,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  return (
    <Box>
      <Heading variant="h2" as="h2">
        <Typewriter
          options={{
            strings: activePage.heading,
            autoStart: true,
            delay: 25,
            pauseFor: 3000000,
            cursor: "",
          }}
        />
      </Heading>
      <MotionText
        variant="p"
        margin="0 0 3rem 0"
        variants={textDescriptionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {activePage.description}
      </MotionText>
    </Box>
  );
};

export default SecondaryPageHeader;
