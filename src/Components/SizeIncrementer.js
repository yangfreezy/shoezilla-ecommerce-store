import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from ".";

import minusIcon from "./../Assets/minus-icon.png";
import plusIcon from "./../Assets/plus-icon.png";

const StyledIncrementer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  width: 10px;
  height: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
`;

export const SizeIncrementer = ({ direction, handleClick }) => {
  return direction === "up" ? (
    <StyledIncrementer onClick={handleClick}>
      <Icon src={minusIcon} width="24px" />
    </StyledIncrementer>
  ) : (
    <StyledIncrementer onClick={handleClick}>
      <Icon src={plusIcon} width="24px" />
    </StyledIncrementer>
  );
};

SizeIncrementer.propTypes = {
  direction: PropTypes.string,
  handleClick: PropTypes.func
};
