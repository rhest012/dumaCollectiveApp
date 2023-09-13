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

const TheGrind = () => {
  // const { data, error, isPending } = useFetch(" http://localhost:8000/clients");

  const data = useFetchFirebase("clients");

  // Page Location
  const location = useLocation();
  const pageLocation = location.pathname;

  // Framer Motion
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const MotionGridItem = motion(GridItem);

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const imageChildVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  return (
    <>
      <CaseStudies />
    </>
  );
};

export default TheGrind;
