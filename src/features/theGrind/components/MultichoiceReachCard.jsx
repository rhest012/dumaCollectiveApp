import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import TwitterFeed from "../../../assets/theGrind/jff/JFF Screen 2.png";
import { useSpring, animated } from "react-spring";
import React from "react";
import ReachChart from "../../../assets/theGrind/Multichoice/Multichoice_reach.svg";
import MultichoicePhone from "../../../assets/theGrind/Multichoice/Multichoice_iPhone.png";
import MultichoiceMac from "../../../assets/theGrind/Multichoice/Multichoice_Mac.png";
import MultichoiceBackground from "../../../assets/theGrind/Multichoice/MCG_Background.png";
import MultiChoiceInfographic from "../../../assets/theGrind/Multichoice/Multichoice_reach_infographic.svg";
import MultiChoicePattern from "../../../assets/theGrind/Multichoice/MCG_Pattern.png";
import { FaUsers, FaUser, FaHandshake } from "react-icons/fa";

import { BsBarChartLine } from "react-icons/bs";

const MultichoiceReachCard = () => {
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
  };

  const statContainer = {
    m: 0,
    borderLeft: "1px solid #fff",
    color: "#FFFFFF",
  };

  const statContainerFlex = {
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingY: "1rem",
  };

  const statStyle = {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1rem",
    paddingBottom: "0.5rem",
  };
  const statStyleLight = {
    // as: "h5",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1rem",
    color: "#fff",
    paddingBottom: "0.5rem",
  };

  const statDescriptionStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.85rem",
  };

  const statDescriptionLightStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    color: "#fff",
  };

  const verticalHeading = {
    fontSize: "1.5rem",
    fontFamily: "Roc Grotesk Wide",
    textAlign: "center",
    textTransform: "uppercase",
    transform: "rotate(-90deg)",
  };

  const socialStatsContainer = {
    marginY: "2rem",
    marginX: "4rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "2rem",
  };

  const statsContainerRow = {
    flexDir: {
      base: "column",
      sm: "column",
      md: "column",
      lg: "row",
      xl: "row",
    },
    justifyContent: "space-between",
    _first: {
      padding: "2rem 0 0 0",
    },

    _last: {
      padding: "0 0 2rem 0",
    },
  };

  const twoColStatContainer = {
    marginX: "0.25rem",
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    width: "100%",
  };

  function Countdown({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <Box sx={socialContainer}>
      <Flex justifyContent="center">
        <Heading sx={socialContainerHeading}>
          &nbsp;&nbsp;Reach&nbsp;&nbsp;
        </Heading>
      </Flex>

      <Box padding="2rem">
        <Text variant="p" textAlign="center" width="100%">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo numquam
          magni optio voluptates ducimus sed adipisci quod soluta beatae, ab
          possimus, nostrum expedita laborum labore molestiae aut? Magnam, nihil
          optio?
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "30%: 70%",
            lg: "30%: 70%",
            xl: "30% 70%",
          }}
          my="2rem"
        >
          <GridItem
            mx="auto"
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            {/* <Image src={TwitterFeed} height="400" width="auto" /> */}
            <Flex sx={statsContainerRow}>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>5.84k</Heading>
                <Heading as="h3" sx={statStyle}>
                  Total Volume
                </Heading>
              </Flex>
            </Flex>
            <Flex sx={statsContainerRow}>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>125M</Heading>
                <Heading as="h3" sx={statStyle}>
                  Total Reach
                </Heading>
              </Flex>
            </Flex>
            <Flex sx={statsContainerRow}>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>6.64M</Heading>
                <Heading as="h3" sx={statStyle}>
                  Total Average
                </Heading>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem mx="8" my="auto">
            <Heading
              variant="h4"
              textAlign="center"
              textTransform="uppercase"
              marginTop="1rem"
              marginLeft={{ base: "0", sm: "0", md: "6rem", xl: "6rem" }}
            >
              Reach breakdown by device
            </Heading>
            <Flex
              flexDir={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              marginY="1rem"
              justifyContent="center"
            >
              <Flex flexDir="column">
                <Image src={MultichoicePhone} height="400" width="auto" />
                <Heading as="h3" sx={statStyle}>
                  11,102,566
                </Heading>
                <Text variant="p" textAlign="center">
                  Total <strong> mobile Reach</strong>
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Image src={MultichoiceMac} height="400" width="auto" />
                <Heading as="h3" sx={statStyle}>
                  2,597,034
                </Heading>
                <Text variant="p" textAlign="center">
                  Total <strong> desktop Reach</strong>
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <Box padding="2rem">
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
          }}
        >
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Text variant="p" textAlign="center" width="100%">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              numquam magni optio voluptates ducimus sed adipisci quod soluta
              beatae, ab possimus, nostrum expedita laborum labore molestiae
              aut? Magnam, nihil optio?
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItem="center">
            <Flex
              height="500px"
              width="500px"
              backgroundSize="cover"
              backgroundImage={MultiChoicePattern}
            >
              <Image src={MultiChoiceInfographic} />
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <Box sx={socialStatsContainer} backgroundImage={MultichoiceBackground}>
        <Heading
          variant="h4"
          textAlign="center"
          textTransform="uppercase"
          marginBottom="1rem"
          color="#fff"
        >
          Social Reach
        </Heading>
        <Text textAlign="center" color="#fff">
          Page Tweet impressions <strong>after</strong> we handled the account.
          Since we handled the social media for the Joburg Film Festival from
          the first of September 2022 to February 2023, the brands have garnered
          816 followers and recieved an astonishing <strong>1, 780 692M</strong>{" "}
          tweet impressions.
        </Text>
        <Image
          src={ReachChart}
          paddingTop={{
            base: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "0",
            xl: "0",
          }}
        />
      </Box>
    </Box>
  );
};

export default MultichoiceReachCard;
