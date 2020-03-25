import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  font-style: italic;
  font-size: ${props => props.fontSize || "12px"};
  text-align: ${props => props.textAlign || "center"};
  font-weight: light;
  margin: 10px 10px 20px 10px;
`;
export const ProductListBrandName = ({ brandName, fontSize, textAlign }) => {
  return (
    <StyledName fontSize={fontSize} textAlign={textAlign}>
      {brandName}
    </StyledName>
  );
};
