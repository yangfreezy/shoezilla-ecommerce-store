import React from "react";

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
