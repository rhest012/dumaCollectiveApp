import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import Osego from "../../assets/bodyImages/Osego.jpg";

const HomeContat = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "1fr 1fr",
        xl: "1fr 1fr",
      }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "85vh" }}
      overflow="hidden"
      marginY="2rem"
    >
      <GridItem
        display="flex"
        flexDir="column"
        padding="2rem"
        justifyContent="center"
        alignContent="center"
      >
        <Heading variant="h2">Get in touch with us</Heading>
        <Text variant="p">
          Ready to make things happen? Whether you have a burning question, a
          brilliant idea, or a desire to collaborate, we're here to listen,
          connect, and transform your vision into reality. Reach out to us using
          the contact details below or fill out the form, and we'll get back to
          you as soon as possible.
          <br />
          <br />
          Together, we are building a future where African creativity takes
          centre stage and transforms the world. Our creative staff thrives on
          turning ideas into reality.
        </Text>
        <Link to="/get-in-touch">
          <Button variant="standardButton">Get In Touch</Button>
        </Link>
      </GridItem>
      <GridItem
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          width="400px"
          height="400px"
          src={Osego}

          // url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </GridItem>
    </Grid>
  );
};

export default HomeContat;
