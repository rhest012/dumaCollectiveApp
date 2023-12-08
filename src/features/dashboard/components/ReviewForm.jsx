import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import firebase from "firebase/compat/app";
import { SortAlphabeticallyHelper } from "../../../helpers/SortAlphabeticallyHelper";
import SuccessDrawer from "./uxComponents/SuccessDrawer";

const ReviewForm = () => {
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

  const singleInputContainer = {
    width: "100%",
  };

  const inputRow = {
    marginY: "2rem",
    flexDirection: { base: "column", lg: "row" },
  };

  const labelStyle = {
    mt: "2",
    ml: "-2.5",
    fontSize: "0.85rem",
  };

  // Fetch Employee Data
  const data = useFetchFirebase("employees");
  const [sortedEmployees, setSortedEmployees] = useState([]);

  useEffect(() => {
    // Sort employees alphabetically by name
    const sortedData = SortAlphabeticallyHelper(data?.[2023]?.employeesList);
    setSortedEmployees(sortedData);
  }, [data]);

  // Select Input Data
  const [inputData, setInputData] = useState({
    reviewer: "",
    reviewee: "",
    5: "",
    10: "",
    11: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    e.target.value = "";
  };

  // Handle Slider Input Data
  const [sliderInputData, setSliderInputData] = useState(() => {
    const initialSliderData = {};
    const numberOfQuestions = 9;
    const excludedNumber = 5;

    for (let i = 1; i <= numberOfQuestions; i++) {
      // Exclude Question 6
      if (i !== excludedNumber) {
        initialSliderData[i] = 5;
      }
    }

    return initialSliderData;
  });

  const handleSliderInputChange = (name, val) => {
    setSliderInputData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  // Set Review Object

  const [newReview, setNewReview] = useState(undefined);

  useEffect(() => {
    if (inputData[5] && inputData[11] !== "") {
      const sliderValues = Object.values(sliderInputData).slice(1, 11);
      const sumOfSliderValues = sliderValues.reduce(
        (acc, value) => acc + value,
        0
      );

      const totalScore = 80;

      setNewReview({
        reviewer: inputData.reviewer,
        reviewee: inputData.reviewee,
        revieweeTotal: sumOfSliderValues,
        percentage: (sumOfSliderValues / totalScore) * 100,

        questions: [
          {
            number: "1",
            question:
              "How effectively do your believe the team member's work has contributed to redefining creative communications from Africa to the world?",
            answer: sliderInputData[1],
          },
          {
            number: "2",
            question:
              "How impactful the team member believes their creative solutions have been in their role?",
            answer: sliderInputData[2],
          },
          {
            number: "3",
            question:
              "How would the team member rate their contribution to creating an oasis for African creativity to flourish, in alignment with the company vision?",
            answer: sliderInputData[3],
          },
          {
            number: "4",
            question:
              "How would the team member rate their contribution to creating an oasis for African creativity to flourish, in alignment with the company vision?",
            answer: sliderInputData[4],
          },
          {
            number: "5",
            question: "Please provide examples",
            answer: inputData[5],
          },
          {
            number: "6",
            question:
              "How consistently has the team member shown respect for colleagues, clients, and partners in their interactions and collaborations?",
            answer: sliderInputData[6],
          },
          {
            number: "7",
            question:
              "How well have they have taken accountability for mistakes or issues and how they have resolved them?",
            answer: sliderInputData[7],
          },
          {
            number: "8",
            question:
              "In what ways has the team member demonstrated an entrepreneurial mindset in their work, and how has it benefited the company or their team?",
            answer: sliderInputData[8],
          },
          {
            number: "9",
            question:
              "How has the team member strived to do the basic right in their role, and what impact do they feel this has had on their work?",
            answer: sliderInputData[8],
          },
          {
            number: "10",
            question:
              "How has the team member strived to do the basic right in their role, and what impact do they feel this has had on their work?",
            answer: sliderInputData[9],
          },
          {
            number: "11",
            question: "Give overall feedback to your fellow Dumarian",
            answer: inputData[11],
          },
        ],
      });
    }
  }, [inputData, sliderInputData]);

  // Handle Submission
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isReviewSuccess, setIsReviewSuccess] = useState(false);
  const [isReviewPending, setIsReviewPending] = useState(false);

  const handleSubmit = async () => {
    setIsReviewPending(true);

    try {
      const database = firebase.database();

      const databaseRef = database.ref(
        `employees/2023/performanceReviewResponses/${inputData.reviewee}`
      );

      databaseRef.set(newReview, (error) => {
        if (error) {
          setErrorMessage("Could not complete registration, please try again.");
          console.error(error);
        } else {
          setIsReviewPending(false);
          setIsReviewSuccess(true);
          console.log("submission success");
        }
      });
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  // Handle Submission UI
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isReviewSuccess) {
      setIsDrawerOpen(true);
    }
  }, [isReviewSuccess]);

  return (
    <>
      {data && (
        <Box
          width="100%"
          paddingX={{ base: "2rem", md: "6rem", lg: "8rem", xl: "12rem" }}
        >
          <Flex gap="2rem" className="staff-name-container" sx={inputRow}>
            <Box single-staff-container sx={singleInputContainer}>
              <Select
                placeholder="Your Name"
                name="reviewer"
                value={inputData.reviewer}
                onChange={handleInputChange}
                variant="unstyled"
                sx={inputStyling}
                width="100%"
              >
                {sortedEmployees
                  ? sortedEmployees?.map((employee, index) => (
                      <option key={index} value={employee?.name}>
                        {employee?.name}
                      </option>
                    ))
                  : "Employee List Loading"}
              </Select>
            </Box>
            <Box single-staff-container width="100%">
              <Select
                placeholder="Employee reviewing"
                variant="unstyled"
                sx={inputStyling}
                name="reviewee"
                value={inputData.reviewee}
                onChange={handleInputChange}
              >
                {sortedEmployees
                  ? sortedEmployees?.map((employee, index) => (
                      <option key={index} value={employee?.name}>
                        {employee?.name}
                      </option>
                    ))
                  : "Employee List Loading"}
              </Select>
            </Box>
          </Flex>
          {data?.[2023]?.performanceReview?.map((survey, index) => (
            <>
              <Box
                key={index}
                className="section-container"
                margin="3rem 0 1rem 0"
              >
                <Heading variant="h5" marginBottom="1rem">
                  {survey.section}
                </Heading>

                {survey?.questions?.map((question, index) =>
                  question.type === "scale" ? (
                    <Box
                      key={index}
                      className="slider-container"
                      sx={singleInputContainer}
                    >
                      <Heading variant="h5">{question.id}.</Heading>
                      <Text>{question.question}</Text>

                      <Slider
                        aria-label={`slider-${question.id}`}
                        defaultValue={5}
                        min={0}
                        max={10}
                        step={1}
                        margin="2.5rem 0"
                        value={sliderInputData[question.id]}
                        onChange={(val) =>
                          handleSliderInputChange(`${question.id}`, val)
                        }
                      >
                        <SliderMark value={0} {...labelStyle}>
                          0
                        </SliderMark>
                        <SliderMark value={2} {...labelStyle}>
                          2
                        </SliderMark>
                        <SliderMark value={4} {...labelStyle}>
                          4
                        </SliderMark>
                        <SliderMark value={6} {...labelStyle}>
                          6
                        </SliderMark>
                        <SliderMark value={8} {...labelStyle}>
                          8
                        </SliderMark>
                        <SliderMark value={10} {...labelStyle}>
                          10
                        </SliderMark>
                        <SliderMark
                          value={sliderInputData[question.id]}
                          textAlign="center"
                          bg="#1E174B"
                          color="white"
                          mt="-10"
                          ml="-5"
                          w="12"
                        >
                          {sliderInputData[question.id]}
                        </SliderMark>
                        <SliderTrack>
                          <SliderFilledTrack background="#1E174B" />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </Box>
                  ) : (
                    <Box
                      className="text-area-container"
                      sx={singleInputContainer}
                      key={index}
                    >
                      <Heading variant="h5">{question.id}.</Heading>
                      <Text>{question.question}</Text>
                      <Textarea
                        variant="unstyled"
                        borderBottom="1px solid #1E174B"
                        size="sm"
                        marginBottom="2rem"
                        value={inputData[question.id]}
                        name={question.id}
                        onChange={handleInputChange}
                      />
                    </Box>
                  )
                )}
              </Box>
            </>
          ))}
          <Button width="100%" variant="standardButton" onClick={handleSubmit}>
            Submit
          </Button>
          <SuccessDrawer isOpen={isDrawerOpen} />
        </Box>
      )}
    </>
  );
};

export default ReviewForm;
