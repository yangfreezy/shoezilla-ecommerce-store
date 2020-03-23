import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const PageContainer = ({ children }) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};
