import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import he from "he";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledName = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  margin: 10px 10px 10px 10px;
  max-width: 200px;
  color: #282828;
`;
export const ProductListName = ({ name, id }) => {
  return (
    <StyledLink to={`/product/${id}`}>
      <StyledName>{he.decode(name)}</StyledName>
    </StyledLink>
  );
};
