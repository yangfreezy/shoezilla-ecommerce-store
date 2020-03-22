import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};
