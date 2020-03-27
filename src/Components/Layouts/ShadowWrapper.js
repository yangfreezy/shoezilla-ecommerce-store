import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-shadow: 5px 5px 10px #888888;
  padding: 20px 50px;
`;

export const ShadowWrapper = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

ShadowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
