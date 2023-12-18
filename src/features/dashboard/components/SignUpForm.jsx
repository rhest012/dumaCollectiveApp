import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
// Firebase
import { auth } from "../../../actions/useFetchFirebase";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const SignUpForm = () => {
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

  const inputContainerStyling = {
    width: "100%",
  };

  // Input Data
  const [inputData, setInputData] = useState({
    firstName: "",
    surname: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // department list
  const departments = [
    "Account Management",
    "Creative",
    "Culture and Partnerships",
    "Exco",
    "Production",
    "Public Relations",
    "Social",
  ];

  // User Object
  const [newUser, setNewUser] = useState({
    firstName: "",
    surname: "",
    department: "",
    email: "",
  });

  useEffect(() => {
    setNewUser((prevData) => ({
      ...prevData,
      firstName: inputData.firstName,
      surname: inputData.surname,
      email: inputData.email,
      department: inputData.department,
    }));
  }, [inputData, setNewUser]);

  // Handle redirect and successful auth
  const navigate = useNavigate();
  const [isAuthDataPending, setIsAuthDataPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const handleRegister = async () => {
    setIsAuthDataPending(true);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        inputData.email,
        inputData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: `${inputData.firstName} ${inputData.surname}`,
      });

      // Post To User Database
      const database = firebase.database();
      const databaseRef = database.ref(
        `users/employees/${inputData.firstName} ${inputData.surname}`
      );

      databaseRef.set(newUser, (error) => {
        if (error) {
          setErrorMessage("An error occurred while signing up.");
        }
      });

      setIsSignUpSuccess(true);
      navigate("/performance-review");
    } catch (error) {
      console.log(error);
      if (inputData.firstName === "") {
        setErrorMessage("Please fill in your name.");
      } else if (inputData.surname === "") {
        setErrorMessage("Please fill in your surname");
      } else if (inputData.department === "") {
        setErrorMessage("Please select department");
      } else if (error.code === AuthErrorCodes.MISSING_EMAIL) {
        setErrorMessage("Email address is required.");
      } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        setErrorMessage("Invalid email address.");
      } else if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage("Email address already in use.");
      } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setErrorMessage("Password is too weak.");
      } else if (error.code === AuthErrorCodes.MISSING_PASSWORD) {
        setErrorMessage("Password is required.");
      } else if (inputData.password !== inputData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
      } else {
        setErrorMessage("An error occurred while signing up.");
      }
    } finally {
      setIsAuthDataPending(false);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      marginY="2rem"
    >
      <Box width="30rem">
        <Flex gap="1rem" sx={inputContainer}>
          <Box className="input-container" sx={inputContainerStyling}>
            <Input
              variant="unstyled"
              placeholder="First Name"
              isRequired
              sx={inputStyling}
              name="firstName"
              value={inputData.firstName}
              onChange={handleInputChange}
            />
            {errorMessage === "Please fill in your name." ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
          <Box className="input-container" sx={inputContainerStyling}>
            <Input
              variant="unstyled"
              placeholder="Surname"
              isRequired
              sx={inputStyling}
              name="surname"
              value={inputData.surname}
              onChange={handleInputChange}
            />
            {errorMessage === "Please fill in your surname" ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
        </Flex>
        <Flex sx={inputContainer}>
          <Box className="input-container" sx={inputContainerStyling}>
            <Select
              variant="unstyled"
              placeholder="Department"
              isRequired
              sx={inputStyling}
              name="department"
              value={inputData.department}
              onChange={handleInputChange}
            >
              {departments
                ? departments.map((department, index) => (
                    <option key={index}>{department}</option>
                  ))
                : "Departments Loading"}
            </Select>
            {errorMessage === "Please select department" ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
        </Flex>

        <Flex sx={inputContainer}>
          <Box className="input-container" sx={inputContainerStyling}>
            <Input
              variant="unstyled"
              placeholder="Email Address"
              isRequired
              sx={inputStyling}
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
            />
            {errorMessage === "Email address is required." ||
            errorMessage === "Invalid email address." ||
            errorMessage === "Email address already in use." ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
        </Flex>

        <Flex sx={inputContainer}>
          <Box className="input-container" sx={inputContainerStyling}>
            <Input
              variant="unstyled"
              placeholder="Password"
              type="password"
              isRequired
              sx={inputStyling}
              name="password"
              value={inputData.password}
              onChange={handleInputChange}
            />
            {errorMessage === "Password is required." ||
            errorMessage === "Password is too weak." ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
        </Flex>

        <Flex sx={inputContainer}>
          <Box className="input-container" sx={inputContainerStyling}>
            <Input
              variant="unstyled"
              placeholder="Confirm Password"
              type="password"
              isRequired
              sx={inputStyling}
              name="confirmPassword"
              value={inputData.confirmPassword}
              onChange={handleInputChange}
            />
            {errorMessage === "Passwords do not match." ? (
              <Text color="red" mt={2}>
                {errorMessage}
              </Text>
            ) : null}
          </Box>
        </Flex>
        <Flex sx={inputContainer}>
          {errorMessage === "An error occurred while signing up." ? (
            <Text color="red" mt={2}>
              {errorMessage}
            </Text>
          ) : null}
        </Flex>
        <Button
          variant="standardButton"
          width="100%"
          onClick={handleRegister}
          isLoading={isAuthDataPending ? true : false}
          loadingText="Siging Up"
        >
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
