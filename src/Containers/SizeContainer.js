import React from "react";
import styled from "styled-components";

import {
  SizeIncrementer,
  SizeDisplay,
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

export const SizeContainer = ({ size, increaseSize, decreaseSize }) => {
  return (
    <StyledColumn>
      <ProductListItemNote fontSize="12px" fontWeight="light" note="Size" />
      <StyledSizeContainer>
        <SizeIncrementer direction="down" handleClick={decreaseSize} />
        <SizeDisplay size={size} />
        <SizeIncrementer direction="up" handleClick={increaseSize} />
      </StyledSizeContainer>
    </StyledColumn>
  );
};
