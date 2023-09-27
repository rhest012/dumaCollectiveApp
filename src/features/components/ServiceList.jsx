import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
import { motion } from "framer-motion";
import GetInTouchSection from "./GetInTouchSection";

const ServiceList = () => {
  const services = [
    "Brand Strategy",
    "360 Creative Solutions",
    "Social Media",
    "Public Relations",
    "Influencer Marketing",
    "Events & Production",
    "Talent Procurement",
  ];

  //   Framer Motion
  const MotionAccordionItem = motion(AccordionItem);

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "55% 45%",
        xl: "55% 45%",
      }}
      gap={{ base: "1rem", sm: "1rem", md: "1rem", lg: "2rem", xl: "2rem" }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "75vh" }}
      margin="2rem 2rem 4rem 2rem"
      maxWidth="100vw"
      className="service-list"
      data-scroll-section
    >
      <GridItem
        data-scroll
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Accordion
          // allowToggle
          className="accordion-container"
        >
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
                alignItems="center"
                height="100%"
              >
                <Heading variant="h4" as="h4" textAlign="left">
                  {service}
                </Heading>
              </AccordionButton>
              {/* <AccordionPanel className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam quidem voluptas exercitationem harum ut eius alias dolorum rem. Excepturi enim exercitationem placeat corporis blanditiis facilis dicta provident. Nisi libero commodi incidunt aperiam veniam delectus repudiandae voluptate ut velit voluptas atque sint at dolorem inventore modi nulla, rem quasi nesciunt?
                            </AccordionPanel> */}
            </AccordionItem>
          ))}
        </Accordion>
      </GridItem>
      <GridItem
        width="100%"
        paddingX={{ base: "0", sm: "0", md: "0", lg: "2rem", xl: "2rem" }}
        display="flex"
        justifyContent="center"
        flexDir="column"
        height="100%"
      >
        <GetInTouchSection />
      </GridItem>
    </Grid>
  );
};

export default ServiceList;
