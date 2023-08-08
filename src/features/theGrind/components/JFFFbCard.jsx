import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import InstagramFeed from "../../../assets/theGrind/jff/JFF-Phone-1.png";
import { useSpring, animated } from "react-spring";
import React from "react";
import JffBackground from "../../../assets/theGrind/jff/jff-background.png";
import { FaUsers, FaUser, FaHandshake } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { BsBarChartLine } from "react-icons/bs";

const JffFbCard = () => {
  const socialContainer = {
    border: "1px solid #1E174B",
    mx: "4rem",
    my: "6rem",
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
    as: "h5",
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
          &nbsp;&nbsp;Facebook&nbsp;&nbsp;
        </Heading>
      </Flex>

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
        <GridItem mx="auto" paddingBottom={3}>
          <Image src={InstagramFeed} height="400" width="auto" />
        </GridItem>
        <GridItem mx="8" my="auto">
          <Text textAlign="center">
            For the past five months, the Facebook platform has seen an immense
            inrease in followership, reach, impressions and profile website taps
          </Text>

          <Flex sx={statsContainerRow}>
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>January 2022</Heading>
              <FaUsers fontSize="2rem" />
              <Heading sx={statStyle}>-4</Heading>
              <Text sx={statDescriptionStyle}>Followers</Text>
            </Flex>

            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>February 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>1</Heading>
                  <Text sx={statDescriptionStyle}>Impression</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>2</Heading>
                  <Text sx={statDescriptionStyle}>Followers</Text>
                </Stack>
              </Flex>
            </Flex>

            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>February 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>1</Heading>
                  <Text sx={statDescriptionStyle}>Impression</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>2</Heading>
                  <Text sx={statDescriptionStyle}>Followers</Text>
                </Stack>
              </Flex>
            </Flex>

            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>February 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>1</Heading>
                  <Text sx={statDescriptionStyle}>Impression</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>2</Heading>
                  <Text sx={statDescriptionStyle}>Followers</Text>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>

      <Box sx={socialStatsContainer} backgroundImage={JffBackground}>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
          }}
          paddingY="4rem"
        >
          <GridItem>
            <Text textAlign="center" color="#fff">
              On the Facebook platform, from January-August 2022, the brand had
              3099 Facebook reach, whereas when we started handling the account,
              the brand garnered over 1, 006, 278 page reach, which is a 41.8K%
              increase over the last five months
              <br />
              <br />
              This showcases that our content is reaching the right target
              audience, and with paid media behind some of the posts, this also
              assisted in getting the brand's posts out there.
            </Text>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default JffFbCard;
