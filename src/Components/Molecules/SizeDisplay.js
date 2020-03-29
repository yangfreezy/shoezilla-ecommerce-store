import React from "react";
import PropTypes from "prop-types";

import { SizeIncrementer } from "./../Atoms";
import { Text } from "./../Atoms/Abstracted";
import { Column, Row } from "./../Layouts";

export const SizeDisplay = ({ size, setSize }) => {
  const handleIncrement = (direction, currentSize) => {
    switch (direction) {
      case "decrease":
        if (+size === 6) return;
        return setSize(String(+size - 0.5));
      case "increase":
        if (+size === 12.5) return;
        return setSize(String(+size + 0.5));
      default:
        return;
    }
  };
  return (
    <Column>
      <Text fontSize="12px" fontWeight="light" text="Size" />
      <Row>
        <SizeIncrementer direction="decrease" handleClick={handleIncrement} />
        <Text
          fontSize="18px"
          width="40px"
          textAlign="center"
          text={String(size)}
        />
        <SizeIncrementer direction="increase" handleClick={handleIncrement} />
      </Row>
    </Column>
  );
};

SizeDisplay.propTypes = {
  setSize: PropTypes.func,
  size: PropTypes.string
};
