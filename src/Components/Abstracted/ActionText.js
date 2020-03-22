import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "bold"};
  cursor: pointer;
  margin: 10px 10px 10px 10px;
`;

export const ActionText = ({ text, handleClick, fontSize, fontWeight }) => {
  return (
    <StyledText
      onClick={handleClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </StyledText>
  );
};
