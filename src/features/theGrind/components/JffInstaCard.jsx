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

const JffInstaCard = () => {
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
  };

  const statDescriptionStyle = {
    // fontFamily: "Fira Sans Condensed",
    textAlign: "center",
    textTransform: "uppercase",
  };

  const verticalHeading = {
    fontSize: "1.5rem",
    fontFamily: "Roc Grotesk Wide",
    textAlign: "center",
    textTransform: "uppercase",
    transform: {
      base: "none",
      base: "sm",
      md: "none",
      lg: "rotate(-90deg)",
      xl: "rotate(-90deg)",
    },
  };

  const socialStatsContainer = {
    marginY: "2rem",
    marginX: "4rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "2rem",
  };

  const socialStatsRow = {
    gridTemplateColumns: {
      base: "1fr",
      sm: "1fr",
      md: "30%: 70%",
      lg: "30%: 70%",
      xl: "30% 70%",
    },
    my: "2rem",
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
      <Heading sx={socialContainerHeading}>
        &nbsp;&nbsp;Instagram&nbsp;&nbsp;
      </Heading>

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
        <GridItem display="flex" justifyContent="center" marginBottom="2rem">
          <Image src={InstagramFeed} height="400" width="auto" />
        </GridItem>
        <GridItem>
          <Text textAlign="center" paddingX="2rem">
            For the past five months, the Instagram profile has seen an immense
            increase in followership, reach and impressions and website taps.
          </Text>
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "1fr",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            my="4rem"
            paddingX="2rem"
          >
            <GridItem>
              <Flex sx={statContainerFlex}>
                <Text sx={verticalHeading}>Before&nbsp; &nbsp; &nbsp;</Text>
              </Flex>
            </GridItem>
            <GridItem></GridItem>
            <GridItem mx="auto">
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>
                  <FaUsers fontSize="2.5rem" />
                  <HStack>
                    <Countdown n={6} />
                    <>&nbsp;K</>
                  </HStack>
                </Heading>
                <Text sx={statDescriptionStyle}>Followers</Text>
              </Flex>
            </GridItem>
            <GridItem mx="auto"></GridItem>
          </Grid>
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
            <GridItem mx="auto">
              <Flex sx={statContainerFlex}>
                <Text sx={verticalHeading}>
                  After&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>
                  <FaUsers fontSize="2.5rem" />
                  <HStack>
                    <Countdown n={16} />
                    <>&nbsp;K</>
                  </HStack>
                </Heading>
                <Text sx={statDescriptionStyle}>Followers</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>
                  <ImStatsBars2 fontSize="2.5rem" />
                  <HStack>
                    <Countdown n={4.2} />
                    <>&nbsp;M</>
                  </HStack>
                </Heading>
                <Text sx={statDescriptionStyle}>Impressions</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex sx={statContainerFlex}>
                <Heading sx={statStyle}>
                  <FaHandshake fontSize="2.5rem" />
                  <HStack>
                    <Countdown left="50%" n={3.1} />
                    <>&nbsp;M</>
                  </HStack>
                </Heading>
                <Text sx={statDescriptionStyle}>Reach</Text>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      <Box sx={socialStatsContainer} backgroundImage={JffBackground}>
        <Text color="white" textAlign="center">
          From a content perspective, we went live with a mixture of static &
          video content, also taking advantage of the Reels option, which
          allowed us to get our content to our current audience and a wider
          audience.
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gridTemplateRows={{
            base: "auto",
            sm: "auto",
            md: "auto",
            lg: "repeat(5, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
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
      </Box>
    </Box>
  );
};

export default JffInstaCard;
