import React from "react";
import PropTypes from "prop-types";

import { Column, Row, SizeIncrementer, Text } from "./../Components";

export const SizeDisplay = ({ size, increaseSize, decreaseSize }) => {
  return (
    <Column>
      <Text fontSize="12px" fontWeight="light" text="Size" />
      <Row>
        <SizeIncrementer direction="down" handleClick={decreaseSize} />
        <Text fontSize="18px" width="40px" textAlign="center" text={size} />
        <SizeIncrementer direction="up" handleClick={increaseSize} />
      </Row>
    </Column>
  );
};

SizeDisplay.propTypes = {
  increaseSize: PropTypes.string,
  decreaseSize: PropTypes.string,
  size: PropTypes.string
};
