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

const JffTwitterCard = () => {
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
  };

  const statStyle = {
    as: "h5",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1rem",
  };

  const statDescriptionStyle = {
    // fontFamily: "Fira Sans Condensed",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.85rem",
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

      <Grid gridTemplateColumns="30% 70%" my="2rem">
        <GridItem mx="auto" paddingBottom={3}>
          <Image src={InstagramFeed} height="400" width="auto" />
        </GridItem>
        <GridItem mx="8" my="auto">
          <Text textAlign="center">
            Page Tweet impressions <strong>before</strong> we handled the
            account. In the first six months of January 2022, the Joburg Film
            Festival garnered 31 total followers & total tweet impressions being
            2432.
          </Text>

          <Flex justifyContent="space-between" padding="2rem 0 1rem 0">
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
              <Heading sx={statStyle}>March 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>156</Heading>
                  <Text sx={statDescriptionStyle}>Impressions</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>7</Heading>
                  <Text sx={statDescriptionStyle}>Followers</Text>
                </Stack>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" padding="1rem 0 1rem 0">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>April 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>648</Heading>
                  <Text sx={statDescriptionStyle}>Impressions</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>1</Heading>
                  <Text sx={statDescriptionStyle}>Follower</Text>
                </Stack>
              </Flex>
            </Flex>

            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>May 2022</Heading>
              <Flex>
                <Stack sx={twoColStatContainer}>
                  <BsBarChartLine fontSize="2rem" />
                  <Heading sx={statStyle}>181</Heading>
                  <Text sx={statDescriptionStyle}>Impression</Text>
                </Stack>
                <Stack sx={twoColStatContainer}>
                  <FaUsers fontSize="2rem" />
                  <Heading sx={statStyle}>-5</Heading>
                  <Text sx={statDescriptionStyle}>Followers</Text>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>

      {/* <Box sx={socialStatsContainer} backgroundImage={JffBackground}>
        <Text color="white" textAlign="center">
          From a content perspective, we went live with a mixture of static &
          video content, also taking advantage of the Reels option, which
          allowed us to get our content to our current audience and a wider
          audience.
        </Text>
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridTemplateRows="repeat(5, 1fr)"
          paddingX="1rem"
          paddingY="2rem"
        >
          <GridItem color="#fff" paddingY="1rem">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown textAlign="center" n={106} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Feed Posts</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={300} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Story Posts</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={42} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Reels</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={20} />
                  <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Likes</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={102} />
                  <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Imppressions</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown textAlign="center" n={6} /> <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Engagements</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={293} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Comments</Text>
            </Flex>
          </GridItem>

          <GridItem color="#FFFFFF">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={5} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Comments</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={2} />
                  <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Reach AVG</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={986} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Saves</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown textAlign="center" n={107} />
                  <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Taps Forward</Text>
            </Flex>
          </GridItem>
          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={7.4} />
                  <>&nbsp;%</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Engagement</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={153} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Video Views</Text>
            </Flex>
          </GridItem>

          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <Countdown n={8} />
                  <>&nbsp;K</>
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Taps Back</Text>
            </Flex>
          </GridItem>
          <GridItem color="#fff">
            <Flex sx={statContainerFlex}>
              <Heading sx={statStyle}>
                <HStack>
                  <>&nbsp;+</>
                  <Countdown n={80} />
                </HStack>
              </Heading>
              <Text sx={statDescriptionStyle}>Plays</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default JffTwitterCard;
