import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import he from "he";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledName = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  color: #282828;
`;
export const ProductItemName = ({ name, id }) => {
  return (
    <StyledLink to={`/product/${id}`}>
      <StyledName>{he.decode(name)}</StyledName>
    </StyledLink>
  );
};
