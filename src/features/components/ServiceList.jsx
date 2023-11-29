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
import React, { useEffect, useState } from "react";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
import { motion } from "framer-motion";
import GetInTouchSection from "./GetInTouchSection";
import DumaLogo from "../../assets/newsroom/DumaLogo.jpg";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

const ServiceList = () => {
  const services = [
    {
      name: "Brand Strategy",
      description:
        "Whether it's an entire business repositioning strategy that will inform the next five years or a highly targeted media campaign required to get a specific message across within a set period, our team will become an integral part of your success. ",
    },
    {
      name: "Creative Solutions",
      description:
        "Our Creative studio dives deep to extract the true essence of your brand. From visual elements that communicate your brand to campaigns that reach your audience, our design team conceptualises and enhances your creative presence, consistently striving for innovative communication and design executions.",
    },
    {
      name: "Social Media",
      description:
        "There's more to social media, than just a few posts on a preferred platform. We are highly adept at understanding your brand and what its audience needs and will respond to, as well as which channels are relevant. Armed with a strong digital media buying arm and a well-rounded research, content development, and analytics team, we understand the global and local landscape.",
    },
    {
      name: "Public Relations",
      description:
        "We have extensive positive media and press relationships, spanning top business publications and television news shows to community radio stations and newspapers, giving us the flexibility and ability to gain targeted press coverage for any project. </br></br> We use Social PR (paid, earned, shared, and owned) as part of our strategy to determine the best platforms to land your brand's key messaging.",
    },
    {
      name: "Influencer Marketing",
      description:
        "Known to bring the party to life, our dynamic team of Influencer Specialists will never say no to the challenge of finding a fit-for-purpose Key Opinion Leader for your project or campaign. We're the proud innovators of “Twitter Army” and have a large pool for our clients to choose from. Across a range of industries or sectors. We manage the end-to-end process of finding the right people who elevate your brand.",
    },
    {
      name: "Events & Production",
      description:
        "We are known for our ability to produce impactful & unforgettable events. </br> </br> From concept all the way through to implementation. With a team of consummate professionals, we have access to some of the country's most sought-after talent, with a database that focuses on a variety of industries. We ensure your event has the right talent, is memorable, and above all, successful.",
    },
    {
      name: "Talent Procurement",
      description:
        "Through our extensive experience managing talent, our relationships are still strong to give your brand access to the country's best talent.",
    },
  ];

  // Typewriter
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [typewriterStarted, setTypewriterStarted] = useState(false);

  useEffect(() => {
    if (inView && !typewriterStarted) {
      const timeoutId = setTimeout(() => {
        setTypewriterStarted(true);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inView, typewriterStarted]);

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

      margin="4rem 0 4rem 0"
      maxWidth="100vw"
      className="service-list"
      data-scroll-section
      ref={ref}
    >
      <MotionGridItem
        data-scroll
        variants={leftContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
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
                // flexWrap="wrap"
                alignContent="space-between"
                alignItems="space-between"
                justifyContent="space-between"
                height="100%"
                width="100%"
              >
                <Heading variant="h4" as="h4" textAlign="left">
                  <Typewriter
                    options={{
                      strings: service.name,
                      autoStart: typewriterStarted,
                      delay: 50,
                      pauseFor: 3000000,
                      cursor: "",
                    }}
                  />
                </Heading>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                className="accordion-body"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </AccordionItem>
          ))}
        </Accordion>
      </MotionGridItem>
      <MotionGridItem
        variants={rightContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        exit="exit"
        width="100%"
        paddingX={{ base: "0", sm: "0", md: "0", lg: "2rem", xl: "2rem" }}
        display="flex"
        justifyContent="center"
        flexDir="column"
        height="100%"
      >
        <Image src={DumaLogo} />
      </MotionGridItem>
    </Grid>
  );
};

export default ServiceList;
