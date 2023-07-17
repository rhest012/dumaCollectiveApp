import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import DumaLady from "../../assets/headers/duma_lady.png";
import BuzzShapes from "../../assets/headers/buzz-shapes.png";
import BuzzCircle from "../../assets/headers/buzz-circle.png";

const BuzzHeader = () => {
  return (
    <Grid
      height={{ base: "auto", sm: "auto", md: "auto", lg: "75vh", xl: "75vh" }}
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "50%, 50%",
        xl: "50% 50%",
      }}
      width="100vw"
      //    paddingX="2rem"
      flexDir="row"
      alignItems="center"
      overflow="hidden"
    >
      <GridItem
        paddingTop={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0", xl: "0" }}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        backgroundImage={BuzzShapes}
        backgroundPosition="center"
        backgroundSize={{ sm: "600px", lg: "contain", xl: "contain" }}
        bgRepeat="no-repeat"
        paddingX="2rem"
        height="100%"
      >
        <Heading variant="h2" color="brand.900">
          Innovative Excellence
        </Heading>
        <Text color="brand.900">
          Bring your brand to life with creative communications from Africa, to
          the world.
        </Text>
      </GridItem>
      <GridItem
        display="flex"
        alignContent="flex-end"
        backgroundImage={DumaLady}
        backgroundPosition="bottom"
        backgroundSize="750px"
        bgRepeat="no-repeat"
      >
        <Image
          src={BuzzCircle}
          height={{
            base: "500px",
            sm: "500px",
            md: "500px",
            lg: "600px",
            xl: "600px",
          }}
          width="750px"
        />
      </GridItem>
    </Grid>
  );
};

export default BuzzHeader;
