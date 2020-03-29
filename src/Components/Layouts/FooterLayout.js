import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFooterLayout = styled.div`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 25px 25px;
  background-color: black;
  color: white;
`;

export const FooterLayout = ({ children }) => {
  return <StyledFooterLayout>{children}</StyledFooterLayout>;
};

FooterLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
