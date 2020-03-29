import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
`;

export const NavLayout = ({ children }) => {
  return <StyledNavLayout>{children}</StyledNavLayout>;
};

NavLayout.propTypes = {
  children: PropTypes.element
};
