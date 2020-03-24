import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "bold"};
  color: ${props => props.color || "black"};
  margin: 10px 10px 10px 10px;
  display: inline;
`;

export const Text = ({ text, fontSize, fontWeight, color }) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </StyledText>
  );
};
