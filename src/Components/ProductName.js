import React from "react";
import styled from "styled-components";
import he from "he";

const StyledName = styled.div`
  font-size: 16px;
  text-align: ${props => props.textAlign || "center"};
  font-weight: 900;
  margin: 10px 0px;
  max-width: 225px;
  color: #282828;
`;

export const ProductName = ({ name, productId, textAlign }) => {
  return <StyledName textAlign={textAlign}>{he.decode(name)}</StyledName>;
};
