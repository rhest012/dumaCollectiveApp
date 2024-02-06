import {
  Box,
  Button,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
  useCheckboxGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InterestCheckbox from "./uxComponents/InterestCheckbox";
import useFetchFirebase from "../../../actions/useFetchFirebase";
import firebase from "firebase/compat/app";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SuccessDrawer from "./uxComponents/SuccessDrawer";

const InfluencerRegistrationForm = () => {
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

  const inputContainter = {
    marginBottom: "1rem",
    gap: "1rem",
    flexDirection: { base: "column", md: "row" },
  };

  const inputErrorContainer = {
    width: "100%",
  };

  // Define input data
  const [inputData, setInputData] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: "",
    contactNumber: "",
    email: "",
    province: "",
    city: "",
    interest: "",
    instagram: "",
    tikTok: "",
    youTube: "",
    x: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    e.target.value = "";
  };

  // Handle Age
  const [dateOfBirth, setDateOfBirth] = useState(undefined);

  const handleDateOfBirthChange = (date) => {
    // Format the date to exclude time
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setDateOfBirth(date);
  };

  // Handle checkbox
  const { getCheckboxProps } = useCheckboxGroup({});

  // Handle Interest Input Options
  const interests = [
    "Fashion and beauty",
    "Business and education",
    "Travel and lifestyle",
    "Food and bev",
    "Family vibes",
    "Kids and teens",
    "Entertainment",
    "Sports",
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestsCheckbox = (e) => {
    const { value, checked } = e.target;
    setSelectedInterests((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  const locations = [
    {
      province: "Eastern Cape",
      cities: ["Gqeberha", "Makhanda", "East London"],
    },
    {
      province: "Free State",
      cities: ["Bloemfontein", "Phuthaditjhaba", "Welkom"],
    },
    { province: "Gauteng", cities: ["Pretoria", "Johannesburg"] },
    {
      province: "KwaZulu-Natal",
      cities: ["Durban", "Pietermaritzburg", "Richards Bay", "Newcastle"],
    },
    { province: "Limpopo", cities: ["Polokwane", "Tzaneen"] },
    { province: "Mpumalanga", cities: ["Emalahleni", "Nelspruit"] },
    {
      province: "Northen Cape",
      cities: ["Kimberly", "Kuruman", "Port Nolloth"],
    },
    {
      province: "North West",
      cities: ["Mahikeng", "Potchestroon", "Rustenburg"],
    },
    {
      province: "Western Cape",
      cities: ["Cape Town", "Stellenbosch", "George"],
    },
  ];

  const [activeProvince, setActiveProvince] = useState(undefined);

  useEffect(() => {
    if (inputData.province != "") {
      const matchingProvince = locations?.find(
        (location) => location.province === inputData.province
      );

      if (matchingProvince) {
        setActiveProvince(matchingProvince);
      }
    }
  }, [inputData.province]);

  // Define User Object
  const [newInfluencer, setNewInfluencer] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    contactNumber: "",
    email: "",
    province: "",
    city: "",
    interests: "",
    instagram: "",
    tikTok: "",
    youTube: "",
    x: "",
  });

  useEffect(() => {
    setNewInfluencer({
      name: inputData.firstName,
      surname: inputData.surname,
      dateOfBirth: dateOfBirth?.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      contactNumber: inputData.contactNumber,
      email: inputData.email,
      province: inputData.province,
      city: inputData.city,
      interests: selectedInterests,
      instagram: inputData.instagram,
      tikTok: inputData.tikTok,
      youtube: inputData.youTube,
      x: inputData.x,
    });
  }, [inputData, selectedInterests, dateOfBirth]);

  // Error Handling & submission
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [isRegistrationPending, setIsRegistrationPending] = useState(false);

  const handleRegister = async () => {
    setIsRegistrationPending(true);

    try {
      // Post to firebase
      const database = firebase.database();
      const databaseRef = database
        .ref("influencers")
        .child(`${inputData.firstName} ${inputData.surname}`);

      databaseRef.set(newInfluencer, (error) => {
        if (error) {
          setErrorMessage("Could not complete registration, please try again.");
        } else {
          setIsRegistrationPending(false);
          setIsRegistrationSuccess(true);
        }
      });
    } catch (error) {
      // Display original error messages for input fields
      if (inputData.firstName == "") {
        setErrorMessage("Please fill in first name");
      } else if (inputData.firstName.length < 1) {
        setErrorMessage("Invalid first name");
      } else if (inputData.surname == "") {
        setErrorMessage("Please fill in surname");
      } else if (inputData.surname.length < 1) {
        setErrorMessage("Invalid surname");
      } else if (inputData.contactNumber == "") {
        setErrorMessage("Please fill in contact number");
      } else if (inputData.contactNumber.length < 10) {
        setErrorMessage("Invalid Contact Number");
      } else if (inputData.province == "") {
        setErrorMessage("Please select province");
      } else if (inputData.city == "") {
        setErrorMessage("Please select city");
      } else if (selectedInterests.length == 0) {
        setErrorMessage("Please select interest(s)");
      } else {
        // Generic error message for unexpected errors
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setIsRegistrationPending(false);
    }
  };

  // Handle Submission UI
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  useEffect(() => {
    if (isRegistrationSuccess) {
      setInputData({
        firstName: "",
        surname: "",
        dateOfBirth: "",
        contactNumber: "",
        email: "",
        province: "",
        city: "",
        interest: "",
        instagram: "",
        tikTok: "",
        youTube: "",
        x: "",
      });

      setSelectedInterests([]);
      setDateOfBirth(undefined);
      setIsDrawerOpen(true);
    }
  }, [isRegistrationSuccess]);

  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap="2rem"
        marginX="2rem"
      >
        <GridItem display="flex" flexDir="column" justifyContent="center">
          <Heading textAlign="center" variant="h2">
            Influencer Portal
          </Heading>
          <Text textAlign="center" variant="p">
            Our mission is to bridge the gap between influencers and brands,
            providing a seamless way to collaborate and create memorable
            campaigns in collaboration with a diverse network of talented
            influencers.
          </Text>
        </GridItem>

        <GridItem>
          <Box className="form-container" width="100%">
            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="First Name"
                  isRequired
                  sx={inputStyling}
                  name="firstName"
                  value={inputData.firstName}
                  onChange={handleInputChange}
                />
                {errorMessage === "Please fill in name" ? (
                  <Text color="red" mt={2}>
                    {errorMessage}
                  </Text>
                ) : null}
              </Box>

              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="Surname"
                  sx={inputStyling}
                  name="surname"
                  value={inputData.surname}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>
            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <ReactDatePicker
                  selected={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  minDate={new Date(1970, 0, 1)} // Assuming you want to limit to historical dates starting from 1800-01-01
                  maxDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  showTimeSelect={false} //
                  // minDate={new Date()} // Set minDate to today
                  placeholderText={"Date of birth"}
                  dropdownMode="select"
                />
              </Box>
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="Contact Number"
                  sx={inputStyling}
                  name="contactNumber"
                  value={inputData.contactNumber}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>
            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="Email Address"
                  sx={inputStyling}
                  name="email"
                  value={inputData.email}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={inputErrorContainer} className="input-error-container">
                <Select
                  placeholder="Province"
                  sx={inputStyling}
                  name="province"
                  value={inputData.province}
                  onChange={handleInputChange}
                >
                  {locations?.map((location, index) => (
                    <option key={index}>{location?.province}</option>
                  ))}
                </Select>
              </Box>
            </Flex>
            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <Select
                  placeholder="City"
                  sx={inputStyling}
                  name="city"
                  value={inputData.city}
                  onChange={handleInputChange}
                >
                  {activeProvince ? (
                    activeProvince?.cities?.map((city, index) => (
                      <option key={index}>{city}</option>
                    ))
                  ) : (
                    <option>Select Province first</option>
                  )}
                </Select>
              </Box>
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="X Handle"
                  sx={inputStyling}
                  name="x"
                  value={inputData.x}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>
            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="Instagram Handle"
                  sx={inputStyling}
                  name="instagram"
                  value={inputData.instagram}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="TikTok Handle"
                  sx={inputStyling}
                  name="tikTok"
                  value={inputData.tikTok}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>

            <Flex sx={inputContainter} className="2col-input">
              <Box sx={inputErrorContainer} className="input-error-container">
                <Input
                  placeholder="YouTube Handle"
                  sx={inputStyling}
                  name="youTube"
                  value={inputData.youTube}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>
            <Box className="interest-container">
              <Heading variant="h6" textAlign="center" marginBottom="1rem">
                Interests
              </Heading>
              <Grid gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
                {interests?.map((interest, index) => (
                  <GridItem key={index} display="flex" justifyContent="center">
                    <CheckboxGroup>
                      <InterestCheckbox
                        {...getCheckboxProps({
                          value: interest,
                        })}
                        label={interest}
                        onChange={handleInterestsCheckbox}
                        isChecked={selectedInterests?.includes(interest)}
                      />
                    </CheckboxGroup>
                  </GridItem>
                ))}
              </Grid>
            </Box>

            <Button
              onClick={handleRegister}
              width="100%"
              variant="standardButton"
            >
              Submit
            </Button>
          </Box>
        </GridItem>
      </Grid>
      <SuccessDrawer isOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </Box>
  );
};

export default InfluencerRegistrationForm;
