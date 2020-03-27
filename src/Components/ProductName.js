import React from "react";
import styled from "styled-components";
import he from "he";

import { LinkWrapper } from ".";

const StyledName = styled.div`
  font-size: ${props => props.fontSize || "16px"};
  text-align: ${props => props.textAlign || "center"};
  font-weight: ${props => props.fontWeight || "bolder"};
  margin: 10px 0px;
  max-width: ${props => props.maxWidth || "300px"};
  color: #282828;
  word-wrap: break-word;
`;

export const ProductName = ({
  name,
  productId,
  textAlign,
  maxWidth,
  fontWeight,
  fontSize
}) => {
  return (
    <LinkWrapper to={`/product/${productId}`}>
      <StyledName
        maxWidth={maxWidth}
        textAlign={textAlign}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {he.decode(name)}
      </StyledName>
    </LinkWrapper>
  );
};
