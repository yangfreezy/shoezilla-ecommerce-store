import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { ProductListItem, LoadingAnimation } from ".";

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
  const { shoesList, setShoesList } = value;
  useEffect(() => {}, [shoesList, setShoesList]);
  return (
    <StyledList>
      {shoesList && shoesList.length ? (
        shoesList.map(shoe => {
          const key = shoe.productId + "/" + shoe.colorId;
          return <ProductListItem product={shoe} key={key} />;
        })
      ) : (
        <LoadingAnimation />
      )}
    </StyledList>
  );
};
