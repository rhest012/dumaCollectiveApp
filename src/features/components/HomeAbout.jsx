import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Video from "../../assets/videos/homeVideo.mp4";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const HomeAbout = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "1fr 1fr",
        xl: "1fr 1fr",
      }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "100vh" }}
      overflow="hidden"
      data-scroll-section
    >
      <GridItem
        display="flex"
        flexDir="column"
        padding="2rem"
        justifyContent="center"
        alignContent="center"
      >
        <Heading variant="h2">
          An Oasis for African creativity to flourish
        </Heading>
        <Text variant="p">
          Through our collaborative partnerships and unwavering support, we aim
          to catalyse a vibrant and inclusive creative ecosystem that celebrates
          the unique perspective and talents of Africa.
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
        <ReactPlayer
          width="400px"
          height="711px"
          paddingY="4rem"
          url={Video}
          playing={true} // Enable autoplay
          loop={true} // Enable video looping
          muted={true} // Enable mute
        />
      </GridItem>
    </Grid>
  );
};

export default HomeAbout;
