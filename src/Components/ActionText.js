import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ActionText = ({ text, handleClick }) => {
  return <StyledText onClick={handleClick}> {text} </StyledText>;
};
