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
  return (
    <Box
      margin="4rem 2rem"
      backgroundImage={NbaImage1}
      height="100%"
      backgroundPosition="center"
      backgroundSize="contain"
    >
      <Box padding=" 4rem 2rem" width="70%">
        <Heading sx={socialContainerHeading}>Evaluation</Heading>
        <Box>
          <Text fontSize="1.25rem" variant="p" color="#fff">
            A total of three prominent influencers took center stage in the
            campaign, collectively delivering an impressive impact. The campaign
            witnessed a staggering 74 posts shared by these influencers,
            captivating an extensive audience of
            <Heading marginLeft="1rem" variant="h3" color="#fff" as="span">
              16 million individuals.
            </Heading>
          </Text>
        </Box>
        <Text fontSize="1.25rem" variant="p" color="#fff" marginY="2rem">
          The engagement levels soared with a remarkable total of
          <Heading variant="h3" color="#fff" as="span" marginLeft="1rem">
            2.7 million interactions
          </Heading>
          , resulting in an outstanding
          <Heading variant="h3" color="#fff" as="span" marginX="1rem">
            engagement rate of 16.2%
          </Heading>
          These impressive statistics reflect the tremendous success achieved in
          driving awareness, fostering connections, and sparking meaningful
          conversations surrounding the campaign.
        </Text>
      </Box>
    </Box>
  );
};

export default NbaEvaluation;
