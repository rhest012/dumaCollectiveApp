import { Box } from "@chakra-ui/react";
import CaseStudies from "../components/CaseStudies";
import transition from "../../components/transition";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";
import { Helmet } from "react-helmet-async";

const TheGrind = () => {
  return (
    <>
      <Helmet>
        <title>The Grind</title>
        <meta
          name="description"
          content="Our Work Never Stops... The hustle never ends, but it's all in a day's work to ensure your brands impact lasts a lifetime."
        />
        <link rel="canonical" href="/git" />
      </Helmet>
      <Box marginY="3rem" marginX="2rem">
        <SecondaryPageHeader />
        <CaseStudies />
      </Box>
    </>
  );
};

export default transition(TheGrind);
