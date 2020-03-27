import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-shadow: 5px 5px 10px #888888;
`;

export const ShadowWrapper = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
