import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import he from "he";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledName = styled.div`
  font-size: 16px;
  text-align: ${props => props.textAlign || "center"};
  font-weight: 900;
  margin: 10px 10px 10px 10px;
  max-width: 225px;
  color: #282828;
`;

export const ProductName = ({ name, id, textAlign }) => {
  return (
    <StyledLink to={`/product/${id}`}>
      <StyledName textAlign={textAlign}>{he.decode(name)}</StyledName>
    </StyledLink>
  );
};
