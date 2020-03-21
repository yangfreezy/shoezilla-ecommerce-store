import React from "react";
import styled from "styled-components";

const StyledThumbnail = styled.img`
  width: 200px;
  height: auto;
`;

export const ProductListThumbnail = ({ src, alt }) => {
  return <StyledThumbnail src={src} alt={alt} />;
};
