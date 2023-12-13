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

  const [revieweeInputData, setRevieweeInputData] = useState({
    reviewee: { name: "", role: "" },
  });

  const handleRevieweeInputData = (e) => {
    const { name, value } = e.target;
    const [employeeName, employeePosition] = value.split(" - ");

    setRevieweeInputData((prevData) => ({
      ...prevData,
      reviewee: {
        name: employeeName,
        role: employeePosition,
      },
    }));

    e.target.value = "";
  };
  const [inputData, setInputData] = useState({
    reviewer: "",
    12: "",
    13: "",
    14: "",
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
    const numberOfQuestions = 11;

    for (let i = 1; i <= numberOfQuestions; i++) {
      initialSliderData[`question${i}`] = 5; // Set the initial value for each question to 5
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
    if (inputData[12] && inputData[13] && inputData[14] !== "") {
      const sliderValues = Object.values(sliderInputData).slice(0, 11);
      const sumOfSliderValues = sliderValues.reduce(
        (acc, value) => acc + value,
        0
      );

      const totalScore = 110;

      setNewReview({
        reviewer: inputData.reviewer,
        reviewee: revieweeInputData.reviewee.name,
        revieweeRole: revieweeInputData.reviewee.role,
        revieweeTotal: sumOfSliderValues,
        percentage: (sumOfSliderValues / totalScore) * 100,

        questions: [
          {
            number: "1",
            question:
              "On a scale from 1 to 10, how effectively does the employee's work contribute to redefining creative communications from Africa to the world?",
            answer: sliderInputData[1],
          },
          {
            number: "2",
            question:
              "Please rate, on a scale from 1 to 10, the impact of the employee's creative solutions in achieving the company's mission of delivering impactful creative solutions.",
            answer: sliderInputData[2],
          },
          {
            number: "3",
            question:
              "How would you rate, on a scale from 1 to 10, the employee's contribution to creating an oasis for African creativity to flourish, in alignment with the company's vision?",
            answer: sliderInputData[3],
          },
          {
            number: "4",
            question:
              "Rate, on a scale from 1 to 10 the employee's leadership skills",
            answer: sliderInputData[4],
          },
          {
            number: "5",
            question:
              "On a scale from 1 to 10, how consistently does the employee show respect for colleagues, clients, and partners in their interactions and collaborations?",
            answer: sliderInputData[5],
          },

          {
            number: "6",
            question:
              "Can you rate, on a scale from 1 to 10, how well the employee takes accountability for mistakes or issues and how they resolve them?",
            answer: sliderInputData[6],
          },
          {
            number: "7",
            question:
              "Rate, on a scale from 1 to 10, how effectively the employee communicates with their team, clients, and stakeholders to ensure the success of a project or initiative.",
            answer: sliderInputData[7],
          },
          {
            number: "8",
            question:
              "In what ways does the employee demonstrate an entrepreneurial mindset in their work, and how does it benefit the company or their team? ",
            answer: sliderInputData[8],
          },
          {
            number: "9",
            question:
              "On a scale from 1 to 10, how does the employee strive to do the basic right in their role, and what impact does this have on their work and the company as a whole?",
            answer: sliderInputData[9],
          },
          {
            number: "10",
            question:
              "Rate, on a scale from 1 to 10, how consistently the employee upholds honesty and integrity in their interactions and decision-making throughout the year.",
            answer: sliderInputData[10],
          },
          {
            number: "11",
            question:
              "Reflecting on the company's purpose, mission, and vision, how would you rate, on a scale from 1 to 10, the employee's personal contribution to advancing these goals in their role?",
            answer: sliderInputData[11],
          },
          {
            number: "12",
            question: "What should the employee continue to do",
            answer: inputData[12],
          },
          {
            number: "13",
            question: "What should the employee start doing",
            answer: inputData[13],
          },
          {
            number: "14",
            question: "What should the employee stop doing",
            answer: inputData[14],
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
        `employees/2023/performanceReviewResponses/${revieweeInputData.reviewee.name}`
      );

      // Check if the data already exists
      const existingData = await databaseRef.once("value");
      const existingDataVal = existingData.val();

      if (existingDataVal) {
        // If data already exists, add a new entry with a specific key
        const newEntryKey = `${inputData.reviewer} review`;
        const newEntryRef = databaseRef.child(newEntryKey);
        newEntryRef.set(newReview, (error) => {
          if (error) {
            setErrorMessage(
              "Could not complete registration, please try again."
            );
            console.error(error);
          } else {
            setIsReviewPending(false);
            setIsReviewSuccess(true);
            console.log("submission success");
          }
        });
      } else {
        // If data doesn't exist, set the new data with a specific key
        const newEntryKey = `${inputData.reviewer} review`;
        databaseRef.child(newEntryKey).set(newReview, (error) => {
          if (error) {
            setErrorMessage(
              "Could not complete registration, please try again."
            );
            console.error(error);
          } else {
            setIsReviewPending(false);
            setIsReviewSuccess(true);
            console.log("submission success");
          }
        });
      }
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
                  ? sortedEmployees.map((employee, index) => (
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
                value={
                  revieweeInputData.reviewee.name
                    ? `${revieweeInputData.reviewee.name} - ${revieweeInputData.reviewee.role}`
                    : ""
                }
                onChange={handleRevieweeInputData}
              >
                {sortedEmployees
                  ? sortedEmployees?.map((employee, index) => (
                      <option
                        key={index}
                        value={`${employee?.name} - ${employee?.role}`}
                      >
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
