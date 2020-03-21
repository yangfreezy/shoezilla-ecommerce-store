import React from "react";
import styled from "styled-components";

const StyledPrice = styled.div`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  margin: 50px 10px 10px 10px;
  font-weight: bold;
`;
export const ProductListPrice = ({ price }) => {
  return <StyledPrice> {price} </StyledPrice>;
};
