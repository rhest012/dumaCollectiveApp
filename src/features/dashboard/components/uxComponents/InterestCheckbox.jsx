import { Box, Text, useCheckbox } from "@chakra-ui/react";
import React from "react";

const InterestCheckbox = (props) => {
  // Styling
  const customCheckboxStyling = {
    borderColor: "brand.900",
    width: "6.5rem",
    transition: "all 0.5s ease",
    _hover: {
      color: "#fff",
      background: "brand.900",
    },
  };

  //   Handle State when checked
  const { state, getCheckboxProps, getInputProps } = useCheckbox(props);
  const { label } = props;

  return (
    <label>
      <input {...getInputProps()} hidden />
      <Box
        sx={{
          ...customCheckboxStyling,
          border: "1px solid #1E174B",
          background: state.isChecked ? "brand.900" : "#fff",
          color: state.isChecked ? "#fff" : "brand.900",
        }}
        className="artwork-name-container"
        {...getCheckboxProps({})}
      >
        <Text textAlign="center" fontSize="0.85rem">
          {label}
        </Text>
      </Box>
    </label>
  );
};

export default InterestCheckbox;
