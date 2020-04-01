import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import imageGuard from "./../../Assets/image-unavailable.png";

const StyledThumbnail = styled.img`
  width: 120px;
  height: auto;
  margin: 5px 5px;

  @media only screen and (min-width: 375px) {
    margin: 10px 10px;
    width: ${({ width }) => width || "150px"};
  }

  @media only screen and (min-width: 620px) {
    width: ${({ width }) => width || "150px"};
  }
`;

export const ProductThumbnail = ({ src, alt, width }) => {
  return <StyledThumbnail width={width} src={src || imageGuard} alt={alt} />;
};

ProductThumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string
};
