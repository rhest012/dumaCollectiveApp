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
      heading: "Brands We've Had the Opportunity to Partner with...",
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
        "Duma Collective, our mission is to redefine creative communications from Africa to the world. As a reviewer, your job is vital in evaluating performance, aligning with our values, and fostering a culture of improvement. Your input is key to recognising talent and pinpointing growth opportunities among your fellow Dumarians.",
      url: "/performance-review",
    },
    {
      name: "Entertainment Committee",
      heading: "Entertainment Committee",
      description:
        "The Duma Collective is stirring up some entertainment excitement! Let's add some flavor by voting for our awesome Entertainment Committee to represent all the Dumarians!",
      url: "/entertainment-committee",
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
