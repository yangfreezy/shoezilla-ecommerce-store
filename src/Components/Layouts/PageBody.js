import React from "react";
import styled from "styled-components";

const StyledPageBody = styled.div`
  min-height: 100vh;
`;

export const PageBody = ({ children }) => {
  return <StyledPageBody>{children}</StyledPageBody>;
};
