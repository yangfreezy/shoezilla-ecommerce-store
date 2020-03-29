import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../../Context";

const StyledImage = styled.img`
  width: 125px;
  height: auto;

  @media only screen and (min-width: 375px) {
    width: ${props => props.width || "200px"};
  }

  @media only screen and (min-width: 620px) {
    width: ${props => props.width || "225px"};
  }
`;

export const ProductItemImage = ({ src, alt, id, width }) => {
  let { productId } = useParams();
  if (!productId) productId = id;
  const { shoeIdCache } = useContext(StoreContext);

  let mostDetailedImage;
  if (shoeIdCache[productId].details) {
    mostDetailedImage =
      "https://www.zappos.com" + shoeIdCache[productId].details.defaultImageUrl;
  }
  return <StyledImage src={mostDetailedImage || src} alt={alt} width={width} />;
};

ProductItemImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string
};
