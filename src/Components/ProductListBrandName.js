import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  font-style: italic;
  font-size: 12px;
  text-align: center;
  font-weight: light;
  margin: 10px 10px 20px 10px;
`;
export const ProductListBrandName = ({ brandName }) => {
  return <StyledName> {brandName} </StyledName>;
};
