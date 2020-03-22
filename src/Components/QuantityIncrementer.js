import React from "react";
import styled from "styled-components";

import { Icon } from ".";

import minusIcon from "./../Assets/minus-icon.png";
import plusIcon from "./../Assets/plus-icon.png";

const StyledIncrementer = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  width: 10px;
  height: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const QuantityIncrementer = ({ direction, handleClick }) => {
  const widthProp = "30px";
  return direction === "up" ? (
    <StyledIncrementer onClick={handleClick}>
      <Icon src={minusIcon} width={widthProp} />
    </StyledIncrementer>
  ) : (
    <StyledIncrementer onClick={handleClick}>
      <Icon src={plusIcon} width={widthProp} />
    </StyledIncrementer>
  );
};
