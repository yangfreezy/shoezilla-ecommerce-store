import React from "react";
import styled from "styled-components";

import { priceWithTax } from "./../Helpers";

const StyledPrice = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 50px 0px 10px 0px;
  font-weight: bold;
`;

const StyledTaxTag = styled.div`
  font-size: 10px;
  text-align: center;
  margin: 50px 10px 1px 5px;
  font-weight: normal;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ProductListPrice = ({ price, withTax }) => {
  return (
    <StyledRow>
      <StyledPrice> {price} </StyledPrice>
      {withTax && (
        <StyledTaxTag> {`+ ${priceWithTax(price)} tax`}</StyledTaxTag>
      )}
    </StyledRow>
  );
};
