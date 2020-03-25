import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.margin || "0"};
`;

export const Column = ({ children, margin }) => {
  return <StyledColumn margin={margin}>{children}</StyledColumn>;
};
