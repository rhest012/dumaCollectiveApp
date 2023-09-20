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
import React from "react";
import NbaImage1 from "../../../assets/theGrind/Nba_Africa/NBA-Africa-Image.jpg";

const NbaCaseStudy = () => {
  const socialContainer = {
    border: "1px solid #1E174B",
    margin: "4rem 2rem",
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

  return (
    <>
      <Heading
        variant="h2"
        textAlign="center"
        fontWeight="500"
        textTransform="uppercase"
      >
        &nbsp;&nbsp;4.8 M People Reached&nbsp;&nbsp;
      </Heading>
      <Box sx={socialContainer}>
        <Flex justifyContent="center">
          <Heading sx={socialContainerHeading}>
            &nbsp;&nbsp;The Problem&nbsp;&nbsp;
          </Heading>
        </Flex>
        <Grid gridTemplateColumns="40% 60%">
          <GridItem
            margin="2rem"
            display="flex"
            alignItems="center"
            height="100%"
          >
            <Text>
              NBA Africa faced a significant challenge: how to convert existing
              brand fans and captivate potential NBA enthusiasts by offering an
              irresistible lifestyle and entertainment experience beyond the
              game.
              <br />
              <br />
              What tools could be used to help NBA Africa drive engagement and
              awareness that goes beyond the confines of traditional gameplay?
            </Text>
          </GridItem>
          <GridItem margin="2rem">
            <Image src={NbaImage1} />
          </GridItem>
        </Grid>
      </Box>

      <Box sx={socialContainer}>
        <Flex justifyContent="center">
          <Heading sx={socialContainerHeading}>
            &nbsp;&nbsp;The Solve&nbsp;&nbsp;
          </Heading>
        </Flex>
        <Grid gridTemplateColumns="60% 40%">
          <GridItem padding="2rem">
            <Image src={NbaImage1} />
          </GridItem>

          <GridItem
            padding="2rem"
            display="flex"
            flexDir="column"
            // alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Text>
              To address the challenge, our comprehensive strategy centered
              around leveraging the identified channels of social media and
              influencers. By utilising a diverse range of social media tools
              and influencer platforms from South Africa and Nigeria, we aimed
              to achieve our set goal. This approach was designed to generate
              the essential traffic required to propel the NBA Africa brand to
              new heights.
            </Text>
            <Heading variant="h5" textAlign="left" paddingY="1rem">
              Objectives
            </Heading>
            <UnorderedList>
              <ListItem>
                Foster robust online and offline community engagement across our
                multiple channels.
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
          </GridItem>
        </Grid>
      </Box>

      <Box sx={socialContainer}>
        <Flex justifyContent="center">
          <Heading sx={socialContainerHeading}>
            &nbsp;&nbsp;The Execution&nbsp;&nbsp;
          </Heading>
        </Flex>
        <Grid gridTemplateColumns="40% 60%">
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
            <Image src={NbaImage1} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default NbaCaseStudy;
