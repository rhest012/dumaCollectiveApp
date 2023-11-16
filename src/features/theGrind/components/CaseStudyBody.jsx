import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NbaImage1 from "../../../assets/theGrind/Nba_Africa/NBA-Africa-Image.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import NextGenLogo from "../../../assets/theGrind/origins/New-Gens-Awards-Logo.png";

const CaseStudyBody = () => {
  // Styling

  const caseStudies = [
    {
      challenge:
        "NBA Africa was looking to convert existing brand fans, and capture potential NBA enthusiasts, by offering an irresistible lifestyle and entertainment experience that goes beyond the game. <br /> <br /> The challenge? Finding the right tools and strategy to help NBA Africa drive engagement and awareness beyond the confines of the court.",
      solve:
        "We compiled a comprehensive strategy that centred around leveraging identified channels of social media and influencers. Through the use of diverse social media tools and influencers from South Africa and Nigeria, our approach was designed to generate essential traffic required to propel NBA Africa to new heights.",
      url: "/the-grind/nba-africa",
      id: "Nba_Africa",
      image: "NBA-Africa-Image.jpg",
    },
    {
      challenge:
        "MultiChoice has been known as Africa's most loved storyteller, but with new and aggressive competitors in the market, there was a need to reinforce and showcase this positioning to our target audiences. <br /> <br /> Duma Collective was tasked with creatively reinforcing and amplifying MultiChoice Group's messaging as Africa's most loved storyteller by highlighting the importance of storytelling Africa and importantly MultiChoice's role as the continents pre-eminent platform for showcasing stories.",
      solve:
        "We compiled a comprehensive strategy that centred around leveraging identified channels of social media and influencers. Through the use of diverse social media tools and influencers from South Africa and Nigeria, our approach was designed to generate essential traffic required to propel NBA Africa to new heights.",
      url: "/the-grind/origins",
      id: "origins",
      image: "origins-header.jpg",
    },
  ];

  // Set Active Case Study
  const location = useLocation();
  const [activeCaseStudy, setActiveCaseStudy] = useState("");

  useEffect(() => {
    const matchingCaseStudy = caseStudies?.find(
      (caseStudy) => caseStudy.url === location.pathname
    );

    setActiveCaseStudy(matchingCaseStudy);
  }, []);

  // Styling
  const socialContainer = {
    border: "1px solid #1E174B",
    margin: { base: "6rem 1.5rem", md: "2rem" },
  };

  const socialContainerHeading = {
    fontWeight: "300",
    textTransform: "uppercase",
    as: "h3",
    textAlign: "center",
    marginTop: "-1.5rem",
    mx: "0.5rem",
    background: "#fff",
    display: "inline-block",
    borderRadius: "2rem",
  };

  const caseStudyContainerRightImage = {
    gridTemplateColumns: { base: "100%", md: "100%", lg: "40% 60%" },
  };

  const caseStudyContainerLeftImage = {
    gridTemplateColumns: { base: "100%", md: "100%", lg: "60% 40%" },
  };

  // Framer Motion
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    hover: {
      scale: 1.05,
      duration: 2,
    },
  };

  return (
    <>
      {activeCaseStudy && (
        <Box>
          {location.pathname === "/the-grind/nba-africa" ? (
            <Heading
              variant="h2"
              textAlign="center"
              fontWeight="500"
              textTransform="uppercase"
            >
              &nbsp;4.8 M People Reached&nbsp;
            </Heading>
          ) : null}

          <Box sx={socialContainer}>
            <Flex justifyContent="center">
              <Heading variant="h2" sx={socialContainerHeading}>
                <Typewriter
                  options={{
                    strings: "The Challenge",
                    autoStart: true,
                    delay: 25,
                    pauseFor: 2000000,
                    cursor: "",
                  }}
                />
              </Heading>
            </Flex>
            <Grid sx={caseStudyContainerRightImage}>
              <GridItem
                margin="1rem"
                display="flex"
                alignItems="center"
                height="100%"
              >
                <Box
                  dangerouslySetInnerHTML={{
                    __html: activeCaseStudy.challenge,
                  }}
                />
              </GridItem>
              <GridItem margin="2rem">
                <MotionBox
                  overflow="hidden"
                  className="image-container"
                  variants={imageContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                >
                  <MotionImage
                    variants={imageChildVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                    src={require(`../../../assets/theGrind/${activeCaseStudy?.id}/${activeCaseStudy?.image}`)}
                  />
                </MotionBox>
              </GridItem>
            </Grid>
          </Box>

          <Box sx={socialContainer}>
            <Flex justifyContent="center">
              <Heading variant="h2" sx={socialContainerHeading}>
                &nbsp;&nbsp;The Solve&nbsp;&nbsp;
              </Heading>
            </Flex>
            <Grid sx={caseStudyContainerLeftImage}>
              <GridItem padding="1rem">
                {location.pathname === "/the-grind/origins" ? (
                  // <ReactPlayer
                  //   className="video-player"
                  //   controls
                  //   url="https://youtu.be/YFB5MXjw3AY"
                  //   muted
                  //   width="775px"
                  //   height="422px"
                  //   loop={true}
                  //   config={{
                  //     vimeo: {
                  //       youtube: {
                  //         width: "100px",
                  //       },
                  //     },
                  //   }}
                  // />
                  <Flex
                    style={{ aspectRatio: "16/9" }}
                    justifyContent="center"
                    // margin={{
                    //   base: "2rem 0rem 2rem 0rem",
                    // }}
                    width="100%"
                    // variants={videoVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                  >
                    <ReactPlayer
                      className="video-player"
                      controls
                      url="https://youtu.be/YFB5MXjw3AY"
                      // muted
                      width="100%"
                      height="100%"
                      loop={true}
                      playing={true}
                      muted={true}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 0, modestbranding: 1 },
                        },
                      }}
                    />
                  </Flex>
                ) : (
                  <MotionBox
                    overflow="hidden"
                    className="image-container"
                    variants={imageContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                  >
                    <MotionImage
                      variants={imageChildVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                      src={require(`../../../assets/theGrind/${activeCaseStudy.id}/${activeCaseStudy.image}`)}
                    />
                  </MotionBox>
                )}
              </GridItem>

              <GridItem
                padding="1rem"
                display="flex"
                flexDir="column"
                // alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Box
                  dangerouslySetInnerHTML={{ __html: activeCaseStudy.solve }}
                />
                {location.pathname === "/the-grind/nba-africa" ? (
                  <Box>
                    <Heading variant="h5" textAlign="left" paddingY="1rem">
                      Objectives
                    </Heading>
                    <UnorderedList>
                      <ListItem>
                        Foster robust online and offline community engagement
                        across our multiple channels.
                      </ListItem>
                      <ListItem>
                        Amplify overall brand engagement for NBA Africa.
                      </ListItem>
                      <ListItem>
                        Generate widespread awareness and reach through
                        meticulously crafted social media plans and strategic
                        collaborations with influential, high-profile
                        personalities.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                ) : null}
              </GridItem>
            </Grid>
          </Box>

          {location.pathname === "/the-grind/origins" ? (
            <Flex margin="2rem" flexDir="column" alignItems="center">
              <Image src={NextGenLogo} width="300px" />
              <Text variant="p" textAlign="center">
                To cap off this fantastic campaign, Duma Collective received A
                2023 New Generation Award for Effective Content Marketing.
              </Text>
            </Flex>
          ) : null}

          {location.pathname === "/the-grind/nba-africa" ? (
            <Box sx={socialContainer}>
              <Flex justifyContent="center">
                <Heading variant="h3" sx={socialContainerHeading}>
                  &nbsp;&nbsp;The Execution&nbsp;&nbsp;
                </Heading>
              </Flex>
              <Grid sx={caseStudyContainerRightImage}>
                <GridItem
                  margin="2rem"
                  display="flex"
                  alignItems="center"
                  height="100%"
                >
                  <Text>
                    The content pieces shared by our co-curators during the
                    event served as a pipeline for excitement, amplifying
                    conversations surrounding the NBA All-Star Weekend,
                    especially within the African audience. With their expertise
                    and distinctive voices, they left an indelible mark on the
                    African landscape, ensuring that the event resonated far and
                    wide.
                    <br />
                    <br />
                    On the Nigerian front, the renowned rapper, Ladipoe, and the
                    charismatic actor, Tobi Bakre, brought a contagious energy
                    that reverberated throughout the All-Star Weekend.
                  </Text>
                </GridItem>
                <GridItem margin="2rem">
                  <MotionBox
                    overflow="hidden"
                    className="image-container"
                    variants={imageContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover="hover"
                  >
                    <MotionImage
                      variants={imageChildVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                      src={NbaImage1}
                    />
                  </MotionBox>
                </GridItem>
              </Grid>
            </Box>
          ) : null}
        </Box>
      )}
    </>
  );
};

export default CaseStudyBody;
