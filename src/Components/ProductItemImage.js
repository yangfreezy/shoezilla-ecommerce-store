import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";

const StyledImage = styled.img`
  width: ${props => props.width || "225px"};
  height: auto;
`;

export const ProductItemImage = ({ src, alt, productId, width }) => {
  let { id } = useParams();
  if (!id) id = productId;
  const value = useContext(StoreContext);
  const { shoeIdCache } = value;
  let mostDetailedImage;
  if (shoeIdCache[id].details) {
    mostDetailedImage =
      "https://www.zappos.com" + shoeIdCache[id].details.defaultImageUrl;
  }
  return <StyledImage src={mostDetailedImage || src} alt={alt} width={width} />;
};

ProductItemImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  productId: PropTypes.string,
  width: PropTypes.string
};
