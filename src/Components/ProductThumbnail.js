import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import imageGuard from "./../Assets/image-unavailable.png";

const StyledThumbnail = styled.img`
  width: ${props => (props.width ? props.width : "200px")};
  height: auto;
  margin: 10px 10px 10px 10px;
`;

export const ProductThumbnail = ({ src, alt, width }) => {
  return <StyledThumbnail width={width} src={src || imageGuard} alt={alt} />;
};

ProductThumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string
};
