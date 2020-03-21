import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import imageGuard from "./../Assets/image-unavailable.png";

const StyledThumbnail = styled.img`
  width: 200px;
  height: auto;
`;

export const ProductListThumbnail = ({ src, alt, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <StyledThumbnail src={src || imageGuard} alt={alt} />
    </Link>
  );
};
