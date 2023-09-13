import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Video from "../../assets/videos/homeVideo.mp4";
import PlaceHolderImage from "../../assets/headers/newsroom-header.jpg";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const HomeShowreel = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "1fr 2fr",
        xl: "1fr 2fr",
      }}
      height={{ base: "auto", sm: "auto", md: "auto", lg: "80vh", xl: "90vh" }}
      overflow="hidden"
      marginX="2rem"
      data-scroll-section
    >
      <GridItem
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        marginRight={{ base: "0", sm: "0", md: "", lg: "1rem", xl: "1rem" }}
      >
        <Heading variant="h2">
          An oasis for African creativity to flourish
        </Heading>
        <Text variant="p">
          Step into our collaborative work environment, where creativity is at
          the heart of everything we do.
        </Text>
        <Link to="/the-grind">
          <Button variant="standardButton">The Grind</Button>
        </Link>
      </GridItem>
      <GridItem
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
      >
        {/* <ReactPlayer
          width="400px"
          height="711px"
          paddingY="4rem"
          url={Video}
          playing={true}
          loop={true}
          muted={true}
        /> */}
        <Image src={PlaceHolderImage} height="500px" />
      </GridItem>
    </Grid>
  );
};

export default HomeShowreel;
