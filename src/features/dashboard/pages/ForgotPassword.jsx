import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../actions/useFetchFirebase";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import transition from "../../components/transition";
import { motion } from "framer-motion";

const Reset = () => {
  // Styling
  const inputStyling = {
    border: "none",
    borderBottom: "1px solid #1E174B",
    borderRadius: "0",
    marginY: "0.25rem",

    _placeholder: {
      fontSize: "0.85rem",
    },
  };

  // Framer Motion
  const MotionBox = motion(Box);

  // const inputContainerVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,

  //     transition: {
  //       duration: 1,
  //       delay: 0.25,
  //     },
  //   },
  //   exit: {
  //     y: 0,
  //     duration: 1,
  //     delay: 0.25,
  //   },
  // };

  const inputContainer = {
    marginTop: "1rem",
  };

  //   Handle Form INput
  const [inputData, setInputData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    e.target.value = "";
  };

  const [isResetPasswordSuccess, setIsResetPasswordSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, inputData.email);
      setIsResetPasswordSuccess(true);

      // Introduce a delay before navigating to the new route
      setTimeout(() => {
        navigate("/account");
      }, 4000); // 3000 milliseconds (adjust the time as needed)
    } catch (error) {
      setErrorMessage(error);
      console.error("Error resetting password:", error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset</title>
        <meta
          name="description"
          content="Duma Collective dashboard staff login"
        />
        <link rel="canonical" href="/account" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <Heading variant="h3" as="h3">
          Reset Password
        </Heading>
        <Box
          className="form-container"
          width={{ base: "300px", md: "400px", lg: "450px" }}
        >
          <Flex sx={inputContainer}>
            <Box width="100%">
              <Input
                variant="unstyled"
                placeholder="Email Address"
                isRequired
                sx={inputStyling}
                name="email"
                value={inputData.email}
                onChange={handleInputChange}
              />
            </Box>
          </Flex>

          <Button
            variant="standardButton"
            width="100%"
            onClick={handleResetPassword}
            marginBottom="1rem"
          >
            Reset Password
          </Button>
          <Box>
            {errorMessage ? <Text color="red">{errorMessage}</Text> : null}
            {isResetPasswordSuccess ? (
              <Text variant="p">
                Reset Email Password successfuly sent to your email address
              </Text>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default transition(Reset);
