import { Box, Grid, GridItem, Heading, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";

// Icons
import SocialIconsHorizontal from "../components/SocialIconsHorizontal";
import transition from "../components/transition";

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
            Get in touch
          </Heading>
          <Text
            variant="p"
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
          </Text>
          <Box>
            <Heading variant="h4">Email Address</Heading>
            <Text sx={contactDetailStyling} variant="p">
              info@dumacollective.com
            </Text>
            <Heading variant="h4">Contact Number</Heading>
            <Text sx={contactDetailStyling} variant="p">
              010 443 5854
            </Text>
          </Box>
          <SocialIconsHorizontal />
        </GridItem>
        <GridItem sx={singleGridContainerStyling} marginRight="2rem">
          <ContactForm />
        </GridItem>
      </Grid>
    </>
  );
};

export default transition(Contact);
