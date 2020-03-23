import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  width: 100%;
`;

export const PageContainer = ({ children }) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};
