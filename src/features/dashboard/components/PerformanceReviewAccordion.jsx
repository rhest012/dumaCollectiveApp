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
import { motion } from "framer-motion";

const PerformanceReviewAccordion = () => {
  const subHeadingStyling = {
    fontSize: "0.85rem",
  };

  const singleInputContainerStyling = {
    width: "100%",
  };

  const singleHeadingContainer = {
    display: { base: "none", md: "block" },
  };

  // Framer Motion Animation
  const MotionBox = motion(Box);

  const accordionContainerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1.5,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
    },
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
            ? 110
            : numberOfReviews === 2
            ? 220
            : numberOfReviews === 3
            ? 330
            : numberOfReviews === 4
            ? 440
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

            // Possible Score Per Question
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
          revieweeRole: reviewDetails?.[0].revieweeRole,
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

  return (
    <>
      {data && (
        <MotionBox
          variants={accordionContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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
                      <Box className="heading-container" width="15.5rem">
                        <Heading variant="h6" as="h6">
                          {review.reviewee}
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          {review.revieweeRole}
                        </Heading>
                      </Box>

                      <Box
                        className="heading-container"
                        sx={singleHeadingContainer}
                      >
                        <Heading variant="h6" as="h5">
                          Employee Reviews
                        </Heading>
                        <Heading variant="h6" sx={subHeadingStyling}>
                          {review.reviews}
                        </Heading>
                      </Box>

                      <Box
                        className="heading-container"
                        sx={singleHeadingContainer}
                      >
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
                    <AccordionPanel
                      className="accordion-body"
                      _last={{
                        paddingBottom: 0,
                      }}
                    >
                      <Box
                        className="slider-container"
                        sx={singleInputContainerStyling}
                      >
                        {review?.questions?.map((question) => (
                          <Box
                            margin="1.25rem 0 0.25rem 0"
                            key={question?.number}
                          >
                            <Heading variant="h6" sx={subHeadingStyling}>
                              {question?.number}.
                            </Heading>
                            <Text variant="p">{question?.question}</Text>

                            <Flex
                              marginY="2rem"
                              paddingY="1rem"
                              borderBottom="1px solid #000"
                              _last={{
                                marginBottom: 0,
                              }}
                              justifyContent="space-between"
                              flexDir={
                                question.percentageScore &&
                                question.percentageScore != NaN
                                  ? "row"
                                  : "column"
                              }
                            >
                              {question?.review.map((singleReview, index) => (
                                <Box key={index}>
                                  <Heading
                                    variant="h6"
                                    sx={subHeadingStyling}
                                    textAlign={
                                      question.percentageScore &&
                                      question.percentageScore != NaN
                                        ? "center"
                                        : "column"
                                    }
                                  >
                                    {singleReview.answer}
                                  </Heading>
                                  <Text
                                    variant="p"
                                    textAlign={
                                      question.percentageScore &&
                                      question.percentageScore != NaN
                                        ? "center"
                                        : "left"
                                    }
                                  >
                                    {singleReview.author}
                                  </Text>
                                </Box>
                              ))}

                              {question.percentageScore &&
                              question.percentageScore != NaN ? (
                                <>
                                  <Box>
                                    <Heading
                                      variant="h6"
                                      sx={subHeadingStyling}
                                      textAlign="center"
                                    >
                                      {question.totalScore} /{" "}
                                      {question.possibleScore}
                                    </Heading>
                                    <Text variant="p" textAlign="center">
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
                                    <Text variant="p" textAlign="center">
                                      Percentage
                                    </Text>
                                  </Box>
                                </>
                              ) : null}
                            </Flex>
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                ))
              : null}
          </Accordion>
        </MotionBox>
      )}
    </>
  );
};

export default PerformanceReviewAccordion;
