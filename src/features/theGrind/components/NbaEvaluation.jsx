import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NbaImage1 from "../../../assets/theGrind/Nba_Africa/NBA-Africa-Image.jpg";

const NbaEvaluation = () => {
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
    color: "#fff",
    display: "inline-block",
    borderRadius: "2rem",
  };

  const inlineHeading = {
    marginLeft: "1rem",
    variant: "h3",
    color: "#fff",
  };

  const singleEvaluationContainer = {
    minHeight: "550px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    margin: "4rem 2rem",
  };

  const evaluationDescription = {
    padding: " 4rem 2rem",
    width: { base: "100%", lg: "70%" },
  };
  return (
    <>
      <Box backgroundImage={NbaImage1} sx={singleEvaluationContainer}>
        <Box sx={evaluationDescription}>
          <Heading sx={socialContainerHeading}>Evaluation</Heading>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff">
              A total of three prominent influencers took center stage in the
              campaign, collectively delivering an impressive impact. The
              campaign witnessed a staggering 74 posts shared by these
              influencers, captivating an extensive audience of
              <Heading marginLeft="1rem" variant="h3" color="#fff" as="span">
                16 million individuals.
              </Heading>
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
              The engagement levels soared with a remarkable total of
              <Heading sx={inlineHeading} as="span">
                2.7 million interactions
              </Heading>
              , resulting in an outstanding
              <Heading sx={inlineHeading} as="span">
                engagement rate of 16.2%
              </Heading>
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
              These impressive statistics reflect the tremendous success
              achieved in driving awareness, fostering connections, and sparking
              meaningful conversations surrounding the campaign.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundImage={NbaImage1} sx={singleEvaluationContainer}>
        <Box sx={evaluationDescription}>
          <Heading sx={socialContainerHeading}>The Results</Heading>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff">
              Leveraging a powerful combination of social media, PR, and
              influencer partnerships, our efforts yielded remarkable results,
              making a lasting impact
              <Heading marginLeft="1rem" variant="h3" color="#fff" as="span">
                4,802,522 individuals were reached
              </Heading>
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
              The campaign generated an impressive
              <Heading variant="h3" color="#fff" as="span" marginLeft="1rem">
                1.3 million interactions
              </Heading>
              , showcasing the depth of audience connection and enthusiasm.
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
              With an impressive
              <Heading variant="h3" color="#fff" as="span" marginLeft="1rem">
                1.3 million impressions
              </Heading>
              , our message resonated across diverse platforms, leaving an
              indelible mark.
            </Text>
          </Box>
          <Box>
            <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
              Encouragingly, our content drove a remarkable
              <Heading variant="h3" color="#fff" as="span" marginLeft="1rem">
                380,982 clicks
              </Heading>
              , demonstrating the significant interest and desire for further
              engagement.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NbaEvaluation;
