import React from "react";
import styled from "styled-components";
import he from "he";

import { LinkWrapper } from ".";

const StyledName = styled.div`
  font-size: 16px;
  text-align: ${props => props.textAlign || "center"};
  font-weight: 900;
  margin: 10px 0px;
  max-width: ${props => props.maxWidth || "225px"};
  color: #282828;
  word-wrap: break-word;
`;

export const ProductName = ({ name, productId, textAlign, maxWidth }) => {
  return (
    <LinkWrapper to={`/product/${productId}`}>
      <StyledName maxWidth={maxWidth} textAlign={textAlign}>
        {he.decode(name)}
      </StyledName>
    </LinkWrapper>
  );
};
