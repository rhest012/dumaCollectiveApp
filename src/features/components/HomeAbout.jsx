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
      margin="2rem"
      data-scroll-section
    >
      <GridItem
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
      >
        <Heading variant="h2">
          An Oasis for African creativity to flourish
        </Heading>
        <Text variant="p">
          We delve into the power of collaboration and support as we set out on
          a mission to catalyse a vibrant and inclusive creative ecosystem that
          celebrates Africa's unique perspectives and talents.
          <br />
          <br />
          We envision a future where African creativity shines brightly, taking
          centre stage and leaving an impact on the world. Our dedicated
          creative staff thrives on turning your ideas into viral-worthy
          realities, pushing the boundaries of what's possible.
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
        marginTop={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
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
