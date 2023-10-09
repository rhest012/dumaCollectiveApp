import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import useFetch from "../../../actions/useFetchData";
import { Link, Link as ReachLink, useLocation } from "react-router-dom";
import SocialIconsHorizontal from "../../components/SocialIconsHorizontal";
import CaseStudies from "../components/CaseStudies";

import { useRef } from "react";

import { useScroll, motion } from "framer-motion";
import transition from "../../components/transition";
import SecondaryPageHeader from "../../components/SecondaryPageHeader";

const TheGrind = () => {
  return (
    <Box marginY="3rem" marginX="2rem">
      <SecondaryPageHeader />
      <CaseStudies />
    </Box>
  );
};

export default transition(TheGrind);
