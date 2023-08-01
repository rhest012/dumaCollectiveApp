import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import HomeHeaderBackground from "../../assets/headers/home-header.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "../../utils/split3.min.js";
import HeaderBackground from "../../assets/headers/homeHeader/BB Titans.png";

const HomeHeader = () => {
  const socialIconContainerStyling = {
    border: "1px solid #1E174B",
    padding: "0.5rem",
    borderRadius: "100%",
  };

  const imageList = [
    "Soweto.png",
    "BB Titans.png",
    "Sasol.jpg",
    "Springboks.png",
    "DSTV Prem.jpg",
    "Lockdown House Party.jpg",
    "JFF.png",
    "NBA Playoffs.png",
    "Robot Boi.jpg",
  ];

  // Framer Motion

  const MotionImage = motion(Image);

  useEffect(() => {
    const split = new SplitText(".header-description", {
      type: "lines",
      lineClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.01,
      ease: "power2",
    });
  }, []);

  return (
    <Grid
      height={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "90vh" }}
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "50%, 50%",
        lg: "50%, 50%",
        xl: "50% 50%",
      }}
      width="100vw"
      paddingTop={{
        base: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "0",
        xl: "0",
      }}
      paddingX="2rem"
      flexDir="row"
      alignItems="center"
      borderBottom="1px solid #1a202c"
      data-scroll-section
    >
      <GridItem
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        overflow="hidden"
      >
        <Heading variant="h1">
          Redefining creative communications from Africa to the world
        </Heading>
        <Text
          id="header-description"
          variant="p"
          marginY={{
            base: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "2rem",
            xl: "2rem",
          }}
        >
          Our collaborative work environment fosters a culture of innovation,
          allowing our team to constantly inspire and elevate one another, From
          brainstorming sessions to meticulous attention to detail, our creative
          thrives on turning ideas into captivating realities.
        </Text>
        <SocialIconsHorizontal />
        <Link to="/get-in-touch">
          <Button variant="standardButton">Get In Touch</Button>
        </Link>
      </GridItem>
      <GridItem>
        <Box
          display="flex"
          overflow="hidden"
          width="100%"
          height="100%"
          justifyContent={{
            base: "center",
            md: "space-between",
            xl: "space-between",
          }}
          flexWrap="wrap"
          // gap="1rem"
          padding={{
            base: "2rem 0",
            sm: "2rem 0",
            md: "2rem 0",
            lg: "2rem 0",
            xl: "0 2rem",
          }}
          gap="1rem"
        >
          {imageList.map((image, index) => (
            <MotionImage
              data-scroll
              // className="header__image"
              // src={HomeHeaderBackground}
              key={index}
              src={require(`../../assets/headers/homeHeader/${image}`)}
              height={{
                base: "170px",
                sm: "170px",
                md: "220px",
                lg: "220px",
                xl: "170px",
              }}
              width={{
                base: "170px",
                sm: "170px",
                md: "220px",
                lg: "220px",
                xl: "170px",
              }}

              // marginTop="-5rem"

              // variants={imageVariants}
              // initial="hidden"
              // animate="visible"
              // exit="exit"
              // transition={{ ease: "linear", duration: 1.6 }}
            />
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomeHeader;
