import React from "react";
import styled from "styled-components";

import {
  SizeValue,
  SizeIncrementer,
  ProductListItemNote
} from "./../Components";

const StyledSizeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeDisplay = ({ size, increaseSize, decreaseSize }) => {
  return (
    <StyledColumn>
      <ProductListItemNote fontSize="12px" fontWeight="light" note="Size" />
      <StyledSizeContainer>
        <SizeIncrementer direction="down" handleClick={decreaseSize} />
        <SizeValue size={size} />
        <SizeIncrementer direction="up" handleClick={increaseSize} />
      </StyledSizeContainer>
    </StyledColumn>
  );
};
