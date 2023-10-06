import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
import { motion } from "framer-motion";
import GetInTouchSection from "./GetInTouchSection";
import PlaceHolderImage from "../../assets/newsroom/SibuMabena 2.png";
import Typewriter from "typewriter-effect";

const ServiceList = () => {
  const services = [
    {
      name: "Brand Strategy",
      description:
        "We're the storytellers for your brand, creating chapters that will leave your competitors on the edge of their seats. Through real-life insights, we're able to craft the perfect strategy to get your brand noticed.",
    },
    {
      name: "360 Creative Solutions",
      description:
        "We're the Swiss Army knife of creativity, slicing through your brand problems with style and the WOW-factor. With our expert team of creatives, we'll turn your brand's puzzles into creative masterpieces so epic you'll hang it up on your bedroom wall.",
    },
    {
      name: "Social Media",
      description:
        "We turn thumb-scrolling into jaw dropping, making your online presence the life of the digital party. We help you connect with your audience in all the right places, at the right times, with the right budget.",
    },
    {
      name: "Public Relations",
      description:
        "We spin stories so captivating, even your neighbour's cat will want to attend your next press conference. With a team that always exceeds the AVE expectations of our clients - just know your brand is in good hands. ",
    },
    {
      name: "Influencer Marketing",
      description:
        "We make influencers, and their followers, fall in love with your brand faster than you can say “double tap”. With an impressive list of macro, micro and nano influencers under our belt, your brand will be basking in the limelight for months.",
    },
    {
      name: "Events & Production",
      description:
        "We're the Spielberg of experiences, transforming your events into blockbuster memories that stick with you. Consider us The Event Surgeon, prescribing your brand a dose of A-list treatment.",
    },
    {
      name: "Talent Procurement",
      description:
        "We're matchmakers for the stars, finding the perfect talent to gush over your brand. Picture this: your brand and the people's champions. We're talking a match made in heaven",
    },
  ];

  //   Framer Motion
  const MotionAccordionItem = motion(AccordionItem);
  const MotionGridItem = motion(GridItem);

  const leftContainerVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  const rightContainerVariants = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
      delay: 1,
    },
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "55% 45%",
        xl: "55% 45%",
      }}
      // gap={{ base: "1rem", sm: "1rem", md: "1rem", lg: "2rem", xl: "2rem" }}

      margin="2rem 0 4rem 0"
      maxWidth="100vw"
      className="service-list"
      data-scroll-section
    >
      <MotionGridItem
        data-scroll
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        display="flex"
        flexDir="column"
        justifyContent="center"
        paddingBottom={{ base: "2rem", lg: "0" }}
      >
        <Accordion allowToggle className="accordion-container">
          {services.map((service, index) => (
            <AccordionItem
              layout
              initial={{ borderBottom: 0 }}
              className="accordion-item"
              key={index}
              borderBottom="1px solid #1d1749"
              _first={{
                borderTop: "1px solid #1d1749",
              }}
              _hover={{
                background: "F9F9F9",
                // color: "#fff",
                // borderY: "1px solid #1d1749",
              }}
            >
              <AccordionButton
                className="accordion-button"
                display="flex"
                flexWrap="wrap"
                alignContent="center"
                alignItems="space-between"
                justifyContent="space-between"
                height="100%"
                width="100%"
              >
                <Heading variant="h4" as="h4" textAlign="left">
                  <Typewriter
                    options={{
                      strings: service.name,
                      autoStart: true,
                      delay: 50,
                      pauseFor: 3000000,
                      cursor: "",
                    }}
                  />
                </Heading>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel className="accordion-body">
                {service.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionGridItem>
      <MotionGridItem
        variants={rightContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        width="100%"
        paddingX={{ base: "0", sm: "0", md: "0", lg: "2rem", xl: "2rem" }}
        display="flex"
        justifyContent="center"
        flexDir="column"
        height="100%"
      >
        <Image src={PlaceHolderImage} />
      </MotionGridItem>
    </Grid>
  );
};

export default ServiceList;
