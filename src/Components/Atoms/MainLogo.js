import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import mainLogo from "./../../Assets/main-logo.png";

const StyledIcon = styled.img.attrs({
  src: mainLogo
})`
  height: auto;
  width: ${({ width }) => width || "100px"};
  margin: ${({ margin }) => margin || "0"};
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 10px #888888;
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const MainLogo = ({ margin, width }) => (
  <Link to="/">
    <StyledIcon margin={margin} width={width} />
  </Link>
);

MainLogo.propTypes = {
  margin: PropTypes.string,
  width: PropTypes.string
};
