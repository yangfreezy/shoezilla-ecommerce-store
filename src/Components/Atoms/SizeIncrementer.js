import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "./Abstracted";

import minusIcon from "./../../Assets/minus-icon.png";
import plusIcon from "./../../Assets/plus-icon.png";

const StyledIncrementer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 10px;
  height: 10px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
`;

export const SizeIncrementer = ({ direction, handleClick }) => {
  const directionIcon = direction === "decrease" ? minusIcon : plusIcon;
  return (
    <StyledIncrementer onClick={() => handleClick(direction)}>
      <Icon src={directionIcon} width="24px" />
    </StyledIncrementer>
  );
};

SizeIncrementer.propTypes = {
  direction: PropTypes.string,
  handleClick: PropTypes.func
};
