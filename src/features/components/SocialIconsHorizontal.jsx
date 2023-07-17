import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

const SocialIconsHorizontal = () => {
  const socialIconContainerStyling = {
    border: "1px solid #1E174B",
    padding: "0.5rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //   Framer Motion
  const MotionFlex = motion(Flex);
  const MotionBox = motion(Box);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 2,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const iconChildVariants = {
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
  return (
    <MotionFlex
      gap="1rem"
      paddingY={{
        base: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link isExternal href="https://www.instagram.com/dumacollective/">
        <MotionBox
          className="social-icon-container"
          sx={socialIconContainerStyling}
          as="button"
          variants={iconChildVariants}
        >
          <AiOutlineInstagram
            className="social-icon"
            color="#1E174B"
            fontSize="1.25rem"
          />
        </MotionBox>
      </Link>
      <Link isExternal href="https://twitter.com/DumaCollective/">
        <MotionBox
          className="social-icon-container"
          sx={socialIconContainerStyling}
          as="button"
          variants={iconChildVariants}
        >
          <AiOutlineTwitter
            className="social-icon"
            color="#1E174B"
            fontSize="1.25rem"
          />
        </MotionBox>
      </Link>
      <Link href="https://www.facebook.com/dumacollective/" isExternal>
        <MotionBox
          className="social-icon-container"
          sx={socialIconContainerStyling}
          as="button"
          variants={iconChildVariants}
        >
          <FaFacebookF
            className="social-icon"
            color="#1E174B"
            fontSize="1.25rem"
          />
        </MotionBox>
      </Link>
      <Link href="https://za.linkedin.com/company/dumacollective" isExternal>
        <MotionBox
          className="social-icon-container"
          sx={socialIconContainerStyling}
          as="button"
          variants={iconChildVariants}
        >
          <FaLinkedinIn
            className="social-icon"
            color="#1E174B"
            fontSize="1.25rem"
          />
        </MotionBox>
      </Link>
    </MotionFlex>
  );
};

export default SocialIconsHorizontal;
