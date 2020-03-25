import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";

const StyledImage = styled.img`
  width: 225px;
  height: auto;
`;

export const ProductItemImage = ({ src, alt, productId }) => {
  let { id } = useParams();
  if (!id) id = productId;
  const value = useContext(StoreContext);
  const { shoeIdCache } = value;
  let mostDetailedImage;
  if (shoeIdCache[id].details) {
    mostDetailedImage =
      "https://www.zappos.com" + shoeIdCache[id].details.defaultImageUrl;
  }
  return <StyledImage src={mostDetailedImage || src} alt={alt} />;
};
