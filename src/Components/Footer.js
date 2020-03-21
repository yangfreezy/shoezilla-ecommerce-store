import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px 20px 50px;
`;

export const Footer = () => {
  return <StyledFooter>{"Footer Text"}</StyledFooter>;
};
