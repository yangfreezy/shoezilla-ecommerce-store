import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledThumbnail = styled.img`
  width: 200px;
  height: auto;
`;

export const ProductListThumbnail = ({ src, alt, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <StyledThumbnail src={src} alt={alt} />
    </Link>
  );
};
