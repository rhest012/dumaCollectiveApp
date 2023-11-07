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
import JffBackground from "../../../assets/theGrind/jff/jff-background.png";
import { FaUsers, FaUser, FaHandshake } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { BsBarChartLine } from "react-icons/bs";

const JffTwitterCard = () => {
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
    marginX: "2rem",
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
          &nbsp;&nbsp;Twitter&nbsp;&nbsp;
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
          <Image src={TwitterFeed} height="400" width="auto" />
        </GridItem>
        <GridItem mx="8" my="auto">
          <Text textAlign="center">
            Page Tweet impressions <strong>before</strong> we handled the
            account. In the first six months of January 2022, the Joburg Film
            Festival garnered 31 total followers & total tweet impressions being{" "}
            <strong>2432</strong>.
          </Text>
        </GridItem>
      </Grid>

      <Box sx={socialStatsContainer} backgroundImage={JffBackground}>
        <Text textAlign="center" color="#fff">
          Page Tweet impressions <strong>after</strong> we handled the account.
          Since we handled the social media for the Joburg Film Festival from
          the first of September 2022 to February 2023, the brands have garnered
          816 followers and recieved an astonishing <strong>1, 780 692M</strong>{" "}
          tweet impressions.
        </Text>

        <Flex sx={statsContainerRow}>
          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>June 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>419</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>7</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>July 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>150</Heading>
                <Text sx={statDescriptionLightStyle}>Impressions</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>5</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>August 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>1033</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>9</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>
        </Flex>

        <Flex sx={statsContainerRow}>
          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>September 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>203K</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>111</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>October 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>585K</Heading>
                <Text sx={statDescriptionLightStyle}>Impressions</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>176</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>Nov 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>206K</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>70</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>
        </Flex>

        <Flex sx={statsContainerRow}>
          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>December 2022</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>9692</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>16</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>January 2023</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>598K</Heading>
                <Text sx={statDescriptionLightStyle}>Impressions</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>209</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>

          <Flex sx={statContainerFlex}>
            <Heading sx={statStyleLight}>February 2023</Heading>
            <Flex>
              <Stack sx={twoColStatContainer}>
                <BsBarChartLine className="social-icon-light" />
                <Heading sx={statStyleLight}>279K</Heading>
                <Text sx={statDescriptionLightStyle}>Impression</Text>
              </Stack>
              <Stack sx={twoColStatContainer}>
                <FaUsers className="social-icon-light" />
                <Heading sx={statStyleLight}>234</Heading>
                <Text sx={statDescriptionLightStyle}>Followers</Text>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default JffTwitterCard;
