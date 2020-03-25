import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content: center;
  flex-wrap: wrap;
  margin: ${props => props.margin || "0"};
`;

export const Row = ({ children, margin, alignItems }) => {
  return (
    <StyledRow alignItems={alignItems} margin={margin}>
      {children}
    </StyledRow>
  );
};
