import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  font-family: Lato;
  font-style: italic;
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  margin: 10px 10px 10px 10px;
  color: black;
`;
export const ProductListBrandName = ({ brandName }) => {
  return <StyledName> {brandName} </StyledName>;
};
