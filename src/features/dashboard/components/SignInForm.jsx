import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../actions/useFetchFirebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = () => {
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

  const inputContainer = {
    marginY: "1rem",
  };

  // Input Data
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    e.target.value = "";
  };

  // Handle Auth
  const [isAuthDataPending, setIsAuthDataPending] = useState(false);
  const [isSignInSuccess, setIsSignInSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsAuthDataPending(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );
      setIsAuthDataPending(false);
      setIsSignInSuccess(true);
    } catch (error) {
      let errorMessage = "";

      if (error.code === "auth/user-not-found") {
        errorMessage = "Account does not exist.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Invalid Password.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (inputData.email === "") {
        setErrorMessage("Email address is required.");
      } else if (inputData.password === "") {
        setErrorMessage("Password is required.");
      } else {
        errorMessage = "An error occurred. Please try again.";
      }
      setIsAuthDataPending(false);

      setErrorMessage(errorMessage);
    }
  };

  // Handle Navigate after successful sign up
  useEffect(() => {
    console.log("useEffect triggered");
    if (isSignInSuccess) {
      navigate("/performance-review");
    }
  }, [isSignInSuccess, navigate]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="339.5px"
      marginY="2rem"
    >
      <Box width="30rem">
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
            {errorMessage == "Invalid email address." ||
            errorMessage == "Account does not exist." ? (
              <Text color="red">{errorMessage}</Text>
            ) : null}
          </Box>
        </Flex>
        <Flex sx={inputContainer}>
          <Box width="100%">
            <Input
              placeholder="Password"
              variant="unstyled"
              isRequired
              sx={inputStyling}
              name="password"
              value={inputData.password}
              type="password"
              onChange={handleInputChange}
            />

            {errorMessage == "Invalid Password." ||
            errorMessage == "An error occurred. Please try again." ||
            errorMessage == "Password is required." ? (
              <Text color="red">{errorMessage}</Text>
            ) : null}
          </Box>
        </Flex>

        <Button
          isLoading={isAuthDataPending ? true : false}
          loadingText="Logging In"
          variant="standardButton"
          width="100%"
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Box>
    </Flex>
  );
};

export default SignInForm;
