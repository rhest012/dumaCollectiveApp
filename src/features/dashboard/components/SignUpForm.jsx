import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";

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

    _focus: {
      border: "1px solid #1E174B",
    },
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
        <Flex gap="1rem">
          <Input
            placeholder="First Name"
            isRequired
            sx={inputStyling}
            name="firstName"
            //   value={inputData.firstName}
            //   onChange={handleInputChange}
          />
          <Input
            placeholder="Surname"
            isRequired
            sx={inputStyling}
            name="firstName"
            //   value={inputData.firstName}
            //   onChange={handleInputChange}
          />
        </Flex>
        <Flex>
          <Input
            placeholder="Email Address"
            isRequired
            sx={inputStyling}
            name="firstName"
            //   value={inputData.firstName}
            //   onChange={handleInputChange}
          />
        </Flex>
        <Flex>
          <Input
            placeholder="Password"
            isRequired
            sx={inputStyling}
            name="firstName"
            //   value={inputData.firstName}
            //   onChange={handleInputChange}
          />
        </Flex>
        <Flex>
          <Input
            placeholder="Confirm Password"
            isRequired
            sx={inputStyling}
            name="firstName"
            //   value={inputData.firstName}
            //   onChange={handleInputChange}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
