import React from "react";
import styled from "styled-components";

import {
  QuantityIncrementer,
  QuantityDisplay,
  ProductListItemNote
} from "./../Components";

const StyledQuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityContainer = ({
  quantity,
  increaseQuantity,
  decreaseQuantity
}) => {
  return (
    <StyledColumn>
      <ProductListItemNote fontSize="12px" fontWeight="light" note="Quantity" />
      <StyledQuantityContainer>
        <QuantityIncrementer direction="down" handleClick={decreaseQuantity} />
        <QuantityDisplay quantity={quantity} />
        <QuantityIncrementer direction="up" handleClick={increaseQuantity} />
      </StyledQuantityContainer>
    </StyledColumn>
  );
};
