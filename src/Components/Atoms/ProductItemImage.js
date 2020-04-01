import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../../Context";

const StyledImage = styled.img`
  width: 125px;
  height: auto;

  @media only screen and (min-width: 375px) {
    width: ${({ width }) => width || "200px"};
  }

  @media only screen and (min-width: 620px) {
    width: ${({ width }) => width || "225px"};
  }
`;

export const ProductItemImage = ({ src, alt, id, width }) => {
  let { productId } = useParams();
  if (!productId) productId = id;
  const { shoeIdCache } = useContext(StoreContext);

  let mostDetailedImage;
  const detailedImage = shoeIdCache[productId].details;
  mostDetailedImage = detailedImage
    ? "https://www.zappos.com" + shoeIdCache[productId].details.defaultImageUrl
    : src;

  return <StyledImage src={mostDetailedImage} alt={alt} width={width} />;
};

ProductItemImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string
};
