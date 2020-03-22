import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = ({ children }) => {
  return <StyledColumn>{children}</StyledColumn>;
};
