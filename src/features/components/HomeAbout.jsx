import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Video from "../../assets/videos/homeVideo.mp4";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
          Redefining creative communications from Africa to the world.
        </Heading>
        <Text variant="p">
          We envision a future in which African creativity emerges boldly,
          taking centre stage and making a global influence. Our creative team
          thrives on turning your ideas into a viral-worthy reality, pushing the
          limits of what's possible.
        </Text>

        <Link to="/what-we-do">
          <Button variant="standardButton">What We Do</Button>
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
          playing={true}
          loop={true}
          muted={true}
        />
      </GridItem>
    </Grid>
  );
};

export default HomeAbout;
