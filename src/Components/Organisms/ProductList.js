import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "./../../Context";
import { ProductListItem } from "./../Molecules";
import { LoadingAnimation } from "./../Atoms";

const StyledProductList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 320px;

  @media only screen and (min-width: 620px) {
    max-width: 620px;
  }

  @media only screen and (min-width: 1000px) {
    max-width: 1000px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const ProductList = () => {
  const value = useContext(StoreContext);
  const { shoesList } = value;
  return (
    <StyledProductList>
      {shoesList && shoesList.length ? (
        shoesList.map(shoe => {
          const key = shoe.productId + "/" + shoe.colorId;
          return <ProductListItem product={shoe} key={key} />;
        })
      ) : (
        <LoadingAnimation />
      )}
    </StyledProductList>
  );
};
