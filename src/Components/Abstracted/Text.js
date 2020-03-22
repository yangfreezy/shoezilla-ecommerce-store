import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "bold"};
  margin: 10px 10px 10px 10px;
`;

export const Text = ({ text, fontSize, fontWeight }) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight}>
      {text}
    </StyledText>
  );
};
