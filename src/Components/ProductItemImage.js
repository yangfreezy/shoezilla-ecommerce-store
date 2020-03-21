import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 200px;
  height: auto;
`;

export const ProductItemImage = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};
