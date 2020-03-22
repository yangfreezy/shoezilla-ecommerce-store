import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";

const StyledImage = styled.img`
  width: 225px;
  height: auto;
`;

export const ProductItemImage = ({ src, alt }) => {
  let { id } = useParams();
  const value = useContext(StoreContext);
  const { shoeIdCache } = value;
  const mostDetailedImage = shoeIdCache[id].details
    ? "https://www.zappos.com" + shoeIdCache[id].details.defaultImageUrl
    : src;
  return <StyledImage src={mostDetailedImage || src} alt={alt} />;
};
