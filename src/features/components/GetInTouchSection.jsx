import { Box, Grid, GridItem, Heading, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import SocialIconsHorizontal from "./SocialIconsHorizontal";

const GetInTouchSection = () => {
  const singleGridContainerStyling = {
    display: "flex",
    flexDir: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  };

  const contactDetailStyling = {
    paddingBottom: "1rem",
  };

  return (
    <Box
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
        // paddingY={{
        //   base: "1rem",
        //   sm: "1rem",
        //   md: "1rem",
        //   lg: "2rem",
        //   xl: "2rem",
        // }}
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
        Reach out to us using the contact details below or fill out the form,
        and we'll get back to you as soon as possible.
      </Text>

      <Box marginTop="2rem">
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
    </Box>
  );
};

export default GetInTouchSection;
