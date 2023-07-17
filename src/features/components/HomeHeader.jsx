import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import HomeHeaderBackground from "../../assets/headers/home-header.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialIconsHorizontal from "./SocialIconsHorizontal";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "../../utils/split3.min.js";

const HomeHeader = () => {
  const socialIconContainerStyling = {
    border: "1px solid #1E174B",
    padding: "0.5rem",
    borderRadius: "100%",
  };

  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);

  const textVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
      transition: { duration: 2.5, delay: 0.5 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 3.5 },
    },
  };

  const imageVariants = {
    visible: {
      y: 0,
      transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 2 },
    },
  };

  const outlineVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 10,
      opacity: 1,
      transition: { duration: 1, delay: 2.5 },
    },
  };

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
      height={{ base: "auto", sm: "auto", md: "auto", lg: "90vh", xl: "79vh" }}
      gridTemplateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr",
        lg: "50%, 50%",
        xl: "50% 50%",
      }}
      width="100vw"
      paddingTop={{
        base: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
      }}
      paddingLeft="2rem"
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
      <GridItem
        display="flex"
        overflow="hidden"
        width="100%"
        height="100%"
        justifyContent="flex-end"
      >
        <MotionImage
          data-scroll
          // className="header__image"
          src={HomeHeaderBackground}
          height={{
            base: "550px",
            base: "550px",
            md: "550px",
            lg: "600px",
            xl: "600px",
          }}
          width="auto"
          layoutId="africa-image"
          paddingTop={{
            base: "1rem",
            sm: "1rem",
            md: "1rem",
          }}
          // marginTop="-5rem"

          // variants={imageVariants}
          // initial="hidden"
          // animate="visible"
          // exit="exit"
          // transition={{ ease: "linear", duration: 1.6 }}
        />
      </GridItem>
    </Grid>
  );
};

export default HomeHeader;
