import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetchFirebase } from "../../../actions/useFetchFirebase";

const PerformanceReviewAccordion = () => {
  const subHeadingStyling = {
    fontSize: "1rem",
  };

  const singleInputContainerStyling = {
    width: "100%",
  };

  const data = useFetchFirebase("employees");

  const [employeeData, setEmployeeData] = useState(undefined);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const performanceReviews = data?.[2023]?.performanceReviewResponses;

        // Convert the object values into an array
        const performanceResponsesArray = performanceReviews
          ? Object.values(performanceReviews)
          : [];

        setEmployeeData(performanceResponsesArray);
      } catch (error) {
        setDataError(error);
      }
    }
  }, [data]);

  // Format Employee Review Data
  const [formattedEmployeeData, setFormattedEmployeeData] = useState([]);

  useEffect(() => {
    if (employeeData) {
      const employeeReviews = employeeData?.map((employee) => {
        // Convert nested review objects to an array
        const reviewDetails = Object.values(employee);

        const totalScore = reviewDetails?.reduce((accumulator, review) => {
          return accumulator + (review?.revieweeTotal || 0);
        }, 0);

        const numberOfReviews = reviewDetails.length;

        const possibleScore =
          numberOfReviews === 1
            ? 80
            : numberOfReviews === 2
            ? 160
            : numberOfReviews === 3
            ? 240
            : numberOfReviews === 4
            ? 320
            : 0;

        const percentageScore = (totalScore / possibleScore) * 100;

        // Formatted List of Questions
        const questions =
          reviewDetails?.[0]?.questions?.map((reviewQuestion) => {
            const number = reviewQuestion.number;
            const question = reviewQuestion.question;

            // Map reviewer information to each question
            const review = reviewDetails?.map((singleReview) => ({
              author: singleReview?.reviewer,
              answer:
                singleReview?.questions.find((q) => q.number === number)
                  ?.answer || null,
            }));

            const totalScore = review?.reduce((accumulator, singleReview) => {
              return accumulator + (singleReview.answer || null);
            }, 0);

            const numberOfReviews = review.length;

            const possibleScore =
              numberOfReviews === 1
                ? 10
                : numberOfReviews === 2
                ? 20
                : numberOfReviews === 3
                ? 30
                : numberOfReviews === 4
                ? 40
                : null;

            const percentageScore = (totalScore / possibleScore) * 100;

            return {
              number,
              question,
              review,
              totalScore,
              numberOfReviews,
              possibleScore,
              percentageScore,
            };
          }) || [];

        const formattedReview = {
          reviewee: reviewDetails?.[0].reviewee,
          reviews: numberOfReviews,
          totalScore: totalScore,
          possibleScore: possibleScore,
          percentage: Math.round(percentageScore),
          questions: questions,
        };

        return formattedReview;
      });

      setFormattedEmployeeData(employeeReviews);
    }
  }, [employeeData]);

  console.log("formatted employee data", formattedEmployeeData);
  console.log(employeeData);

  return (
    <>
      {data && (
        <Box>
          <Accordion allowToggle className="accordion-container">
            {formattedEmployeeData
              ? formattedEmployeeData?.map((review, index) => (
                  <AccordionItem
                    key={index}
                    layout
                    initial={{ borderBottom: 0 }}
                    className="accordion-item"
                    borderBottom="1px solid #1d1749"
                    _first={{
                      borderTop: "1px solid #1d1749",
                    }}
                    _hover={{
                      background: "#FCFFFC",
                      // color: "#fff",
                      // borderY: "1px solid #1d1749",
                    }}
                  >
                    <AccordionButton
                      className="accordion-button"
                      display="flex"
                      // flexWrap="wrap"
                      alignContent="space-between"
                      alignItems="space-between"
                      justifyContent="space-between"
                      height="100%"
                      width="100%"
                    >
                      <Box className="heading-container">
                        <Heading variant="h6" as="h6">
                          {review.reviewee}
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          Account Director
                        </Heading>
                      </Box>

                      <Box className="heading-container">
                        <Heading variant="h6" as="h5">
                          Employee Reviews
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          {review.reviews}
                        </Heading>
                      </Box>

                      <Box className="heading-container">
                        <Heading variant="h6" as="h5">
                          Score
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          {`${review.totalScore} / ${review.possibleScore}`}
                        </Heading>
                      </Box>

                      <Box className="heading-container">
                        <Heading variant="h6" as="h6">
                          Percentage
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          {review.percentage}%
                        </Heading>
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel className="accordion-body">
                      <Box
                        className="slider-container"
                        sx={singleInputContainerStyling}
                      >
                        {review?.questions?.map((question) => (
                          <Box marginBottom="0.25rem">
                            <Heading variant="h6" sx={subHeadingStyling}>
                              {question?.number}.
                            </Heading>
                            <Text variant="p">{question?.question}</Text>

                            <Flex
                              marginY="2rem"
                              paddingBottom="1rem"
                              justifyContent="space-between"
                              borderBottom="1px solid #000"
                            >
                              {question?.review.map((singleReview, index) => (
                                <Box>
                                  <Heading
                                    variant="h6"
                                    sx={subHeadingStyling}
                                    textAlign="center"
                                  >
                                    {singleReview.answer}
                                  </Heading>
                                  <Text varina="p" textAlign="center">
                                    {singleReview.author}
                                  </Text>
                                </Box>
                              ))}

                              <Box>
                                <Heading
                                  variant="h6"
                                  sx={subHeadingStyling}
                                  textAlign="center"
                                >
                                  {question.totalScore} /{" "}
                                  {question.possibleScore}
                                </Heading>
                                <Text varina="p" textAlign="center">
                                  Score
                                </Text>
                              </Box>

                              <Box>
                                <Heading
                                  variant="h6"
                                  sx={subHeadingStyling}
                                  textAlign="center"
                                >
                                  {question.percentageScore}%
                                </Heading>
                                <Text varina="p" textAlign="center">
                                  Percentage
                                </Text>
                              </Box>
                            </Flex>
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              : null}
          </Accordion>
        </Box>
      )}
    </>
  );
};

export default PerformanceReviewAccordion;
