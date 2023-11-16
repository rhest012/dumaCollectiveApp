import { Box, Grid, GridItem, Heading, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Typewriter from "typewriter-effect";

// Icons
import SocialIconsHorizontal from "../components/SocialIconsHorizontal";
import transition from "../components/transition";
import { motion } from "framer-motion";

const Contact = () => {
  const inputStyling = {
    border: "none",
    borderBottom: "1px solid #1E174B",
    borderRadius: "0",
    marginY: "0.25rem",

    _placeholder: {
      fontSize: "0.85rem",
    },
  };

  const imageStyling = {
    height: "300px",
    borderRadius: "0.5rem",
  };

  const singleGridContainerStyling = {
    display: "flex",
    flexDir: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  };

  const socialmediaContainerStyling = {
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    marginTop: { base: "1rem", sm: "1rem", md: "0", lg: "0", xl: "0" },
  };

  const contactDetailStyling = {
    paddingBottom: "1rem",
  };

  // Page Location
  const location = useLocation();

  // Framer Motion
  const MotionText = motion(Text);
  const MotionHeading = motion(Heading);
  const MotionGridItem = motion(GridItem);

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

  const bodyHeadingVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  const bodyTextDescriptionVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
        delay: 2,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  const contactFormVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1.5,
        delay: 2.5,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <>
      <Grid
        // marginY="4rem"
        margin="2rem"
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          base: "1fr",
          lg: "50%, 50%",
          xl: "50% 50%",
        }}
        gap="2rem"
        height={{
          base: "auto",
          sm: "auto",
          md: "auto",
          lg: "90vh",
          xl: "75vh",
        }}
      >
        <GridItem
          sx={singleGridContainerStyling}
          paddingBottom={{
            base: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "2rem",
            xl: "2rem",
          }}
        >
          <Heading variant="h2" as="h2">
            <Typewriter
              options={{
                strings: "Get In Touch",
                autoStart: true,
                delay: 25,
                pauseFor: 3000000,
                cursor: "",
              }}
            />
          </Heading>
          <MotionText
            variant="p"
            variants={textDescriptionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            paddingY={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "2rem",
              xl: "2rem",
            }}
            width={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "90%",
            }}
          >
            Ready to make things happen? Whether you have a burning question, a
            brilliant idea, or a desire to collaborate, we're here to listen,
            connect, and transform your vision into reality.
            <br />
            <br />
            Reach out to us using the contact details below or fill out the
            form, and we'll get back to you as soon as possible.
          </MotionText>
          <Box>
            <MotionHeading
              variant="h4"
              variants={bodyHeadingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Address
            </MotionHeading>
            <MotionText
              sx={contactDetailStyling}
              variant="p"
              variants={bodyTextDescriptionVariants}
              initial="hidden"
              animate="visible"
            >
              Duma Collective, Bordeaux, Johannesburg, 2194
            </MotionText>
            <MotionHeading
              variant="h4"
              variants={bodyHeadingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Email Address
            </MotionHeading>
            <MotionText
              sx={contactDetailStyling}
              variant="p"
              variants={bodyTextDescriptionVariants}
              initial="hidden"
              animate="visible"
            >
              info@dumacollective.com
            </MotionText>
            <MotionHeading
              variant="h4"
              variants={bodyHeadingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Contact Number
            </MotionHeading>
            <MotionText
              sx={contactDetailStyling}
              variant="p"
              variants={bodyTextDescriptionVariants}
              initial="hidden"
              animate="visible"
            >
              010 443 5854
            </MotionText>
          </Box>
          <SocialIconsHorizontal />
        </GridItem>
        <MotionGridItem
          sx={singleGridContainerStyling}
          marginRight="2rem"
          variants={contactFormVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactForm />
        </MotionGridItem>
      </Grid>
    </>
  );
};

export default transition(Contact);
