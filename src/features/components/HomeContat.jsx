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
        margin="2rem"
        justifyContent="center"
        alignContent="center"
      >
        <Heading variant="h2">Get in touch with us</Heading>
        <Text variant="p">
          Got a burning question or a stroke of genius? Let's make things
          happen, shall we? Whether you've got an epic idea or a craving to
          collaborate, we're all ears and ready to work our magic!
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
        marginTop="2rem"
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
