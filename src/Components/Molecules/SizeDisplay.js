import React from "react";
import PropTypes from "prop-types";

import { incrementProductSize } from "./../../Helpers";
import { SizeIncrementer } from "./../Atoms";
import { Text } from "./../Atoms/Abstracted";
import { Column, Row } from "./../Layouts";

export const SizeDisplay = ({ size, setSize }) => {
  return (
    <Column>
      <Text fontSize="12px" fontWeight="light" text="Size: Men's U.S." />
      <Row>
        <SizeIncrementer
          direction="decrease"
          handleClick={() => incrementProductSize("decrease", size, setSize)}
        />
        <Text
          fontSize="18px"
          width="40px"
          textAlign="center"
          text={String(size)}
        />
        <SizeIncrementer
          direction="increase"
          handleClick={() => incrementProductSize("increase", size, setSize)}
        />
      </Row>
    </Column>
  );
};

SizeDisplay.propTypes = {
  setSize: PropTypes.func,
  size: PropTypes.string
};
