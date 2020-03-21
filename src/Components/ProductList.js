import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { ProductListItem } from ".";

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ProductList = () => {
  const value = useContext(StoreContext);
  return (
    <StyledList>
      {value.shoes.map(shoe => {
        return <ProductListItem product={shoe} />;
      })}
    </StyledList>
  );
};
