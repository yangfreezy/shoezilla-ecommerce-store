import React from "react";
import PropTypes from "prop-types";
import he from "he";

import { Text } from "./Abstracted";

export const ProductName = ({
  name,
  textAlign,
  width,
  fontWeight,
  fontSize
}) => {
  return (
    <Text
      maxWidth={width || "200px"}
      width={width || "200px"}
      textAlign={textAlign || "center"}
      fontWeight={fontWeight || "bolder"}
      fontSize={fontSize || "16px"}
    >
      {he.decode(name)}
    </Text>
  );
};

ProductName.propTypes = {
  name: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string
};
