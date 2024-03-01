import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import { SortAlphabeticallyHelper } from "../../../helpers/SortAlphabeticallyHelper";

const EntertainmentComitteeForm = () => {
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

  const inputContainter = {
    marginBottom: "1rem",
    gap: "1rem",
    flexDirection: { base: "column", md: "row" },
  };

  const [inputData, setInputData] = useState({
    employeeName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    e.target.value = "";
  };

  // Fetch Employee Data
  const data = useFetchFirebase("employees");
  const [sortedEmployees, setSortedEmployees] = useState([]);

  useEffect(() => {
    // Sort employees alphabetically by name
    const sortedData = SortAlphabeticallyHelper(data?.[2023]?.employeesList);
    setSortedEmployees(sortedData);
  }, [data]);

  // Error Handling & submission
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isVotingSuccess, setIsVotingSuccess] = useState(false);
  const [isVotingPending, setIsVotingPending] = useState(false);

  const handleVoting = async () => {
    setIsVotingPending(true);

    try {
      // Post to firebase
      const database = firebase.database();
      const databaseRef = database.ref(
        `employees/2023/entertainmentComittee/${inputData.employeeName}`
      );
      // Set the vote data
      databaseRef.set(
        {
          employeeName: inputData.employeeName,
          // Add any other relevant data here
        },
        (error) => {
          if (error) {
            setErrorMessage(
              "Could not complete registration, please try again."
            );
          } else {
            setIsVotingPending(false);
            setIsVotingSuccess(true);
          }
        }
      );
    } catch (error) {
      // Display original error messages for input fields
      if (inputData.employeeName === "") {
        setErrorMessage("Please select staff member");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setIsVotingPending(false);
    }
  };

  return (
    <Box>
      <Flex
        width="500px"
        justifyContent="center"
        alignContent="center"
        flexDir="column"
      >
        <Box sx={inputContainter}>
          <Select
            placeholder="Employee Name"
            sx={inputStyling}
            name="employeeName"
            value={inputData.employeeName}
            onChange={handleInputChange}
            variant="unstyled"
            width="100%"
          >
            {sortedEmployees
              ? sortedEmployees.map((employee, index) => (
                  <option key={index} value={employee?.name}>
                    {employee?.name}
                  </option>
                ))
              : "Employee List Loading"}
          </Select>
        </Box>
        {isVotingSuccess ? (
          <Box marginBottom="1rem">
            <Text variant="p" textAlign="center">
              Vote successfully casted
            </Text>
          </Box>
        ) : null}

        <Button
          marginTop="0rem"
          onClick={handleVoting}
          width="100%"
          variant="standardButton"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default EntertainmentComitteeForm;
