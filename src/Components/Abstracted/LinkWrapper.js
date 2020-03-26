import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LinkWrapper = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
