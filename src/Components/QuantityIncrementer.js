import React from "react";
import styled from "styled-components";

const QuantityIncreaser = styled.div``;
const QuantityDecreaser = styled.div``;

export const QuantityIncrementer = ({ direction, handleClick }) => {
  return direction === "up" ? (
    <QuantityIncreaser onClick={handleClick} />
  ) : (
    <QuantityDecreaser onClick={handleClick} />
  );
};
