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

const CaseStudyBody = () => {
  // Styling

  const caseStudies = [
    {
      challenge:
        "NBA Africa faced a significant challenge: how to convert existing brand fans and captivate potential NBA enthusiasts by offering an irresistible lifestyle and entertainment experience beyond the game.<br /> <br /> What tools could be used to help NBA Africa drive engagement and awareness that goes beyond the confines of traditional gameplay?",
      solve:
        "To address the challenge, our comprehensive strategy centered around leveraging the identified channels of social media and influencers. By utilising a diverse range of social media tools and influencer platforms from South Africa and Nigeria, we aimed to achieve our set goal. This approach was designed to generate the essential traffic required to propel the NBA Africa brand to new heights.",
      url: "/the-grind/nba-africa",
      id: "Nba_Africa",
      image: "NBA-Africa-Image.jpg",
    },
    {
      challenge:
        "MultiChoice has been known as Africa's most loved storyteller, but with new and aggressive competitors in the market, there was a need to reinforce and showcase this positioning to our target audiences. <br /> <br /> Duma Collective was tasked with creatively reinforcing and amplifying MultiChoice Group's messaging as Africa's most loved storyteller by highlighting the importance of storytelling Africa and importantly MultiChoice's role as the continents pre-eminent platform for showcasing stories.",
      solve:
        "Using ATL + BTL advertising, Social Media and PR approaches, we crafted a narrative of MCG as Africa's most loved storyteller through the Origins campaign.<br/> <br/> The campaign was about the elevation and illustration of emerging storytellers and their journeys; their inspirations, motivations, and insights. We identified and partnered with 5 unique storytellers who wielded different artistic mediums on the cusp of their breakthroughs into the mainstream. We wanted to position MultiChoice as the go to platform for African stories, the chosen storytellers were not talents with the biggest numbers but carried impactful stories that normal Africans can resonate with and find inspiration.",
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
    margin: "6rem 2rem",
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
      {location.pathname === "/the-grind/nba-africa" ? (
        <Heading
          variant="h2"
          textAlign="center"
          fontWeight="500"
          textTransform="uppercase"
        >
          &nbsp;&nbsp;4.8 M People Reached&nbsp;&nbsp;
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
            margin="2rem"
            display="flex"
            alignItems="center"
            height="100%"
          >
            <Box
              dangerouslySetInnerHTML={{ __html: activeCaseStudy.challenge }}
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
                src={require(`../../../assets/theGrind/${activeCaseStudy.id}/${activeCaseStudy.image}`)}
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
          <GridItem padding="2rem">
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
          </GridItem>

          <GridItem
            padding="2rem"
            display="flex"
            flexDir="column"
            // alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Box dangerouslySetInnerHTML={{ __html: activeCaseStudy.solve }} />
            {location.pathname === "/the-grind/nba-africa" ? (
              <Box>
                <Heading variant="h5" textAlign="left" paddingY="1rem">
                  Objectives
                </Heading>
                <UnorderedList>
                  <ListItem>
                    Foster robust online and offline community engagement across
                    our multiple channels.
                  </ListItem>
                  <ListItem>
                    Amplify overall brand engagement for NBA Africa.
                  </ListItem>
                  <ListItem>
                    Generate widespread awareness and reach through meticulously
                    crafted social media plans and strategic collaborations with
                    influential, high-profile personalities.
                  </ListItem>
                </UnorderedList>
              </Box>
            ) : null}
          </GridItem>
        </Grid>
      </Box>

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
                he content pieces shared by our co-curators during the event
                served as a pipeline for excitement, amplifying conversations
                surrounding the NBA All-Star Weekend, especially within the
                African audience. With their expertise and distinctive voices,
                they left an indelible mark on the African landscape, ensuring
                that the event resonated far and wide.
                <br />
                <br />
                On the Nigerian front, the renowned rapper, Ladipoe and the
                charismatic actor, Tobi Bakre, brought a contagious energy that
                reverberated throughout the All-Star Weekend.
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
      ) : // <Flex width="100%" className="video-container">
      //   <ReactPlayer
      //     className="video-player"
      //     url="https://vimeo.com/873650411?share=copy"
      //     playing={true}
      //     loop={true}
      //     muted={true}
      //     width="1280px"
      //     height="100%"
      //     options={{
      //       width: "1280px",
      //       height: "100%",
      //     }}
      //   />
      // </Flex>
      null}
    </>
  );
};

export default CaseStudyBody;
