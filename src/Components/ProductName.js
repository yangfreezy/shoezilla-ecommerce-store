import React from "react";
import PropTypes from "prop-types";
import he from "he";

import { LinkWrapper, Text } from ".";
export const ProductName = ({
  name,
  productId,
  textAlign,
  maxWidth,
  fontWeight,
  fontSize
}) => {
  return (
    <LinkWrapper to={`/product/${productId}`}>
      <Text
        maxWidth={maxWidth || "300px"}
        textAlign={textAlign || "center"}
        fontWeight={fontWeight || "bolder"}
        fontSize={fontSize || "16px"}
      >
        {he.decode(name)}
      </Text>
    </LinkWrapper>
  );
};

ProductName.propTypes = {
  name: PropTypes.string,
  productId: PropTypes.string,
  textAlign: PropTypes.string,
  maxWidth: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string
};
