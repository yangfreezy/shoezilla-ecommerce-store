import React, { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import {
  ProductListName,
  ProductListBrandName,
  ProductListPrice,
  ProductItemImage
} from ".";
import { StoreContext } from "./../Context";

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductItemMain = () => {
  const { id } = useParams();
  const value = useContext(StoreContext);
  const shoe = value.shoeIdCache[id];

  return shoe ? (
    <ProductItem>
      <ProductListName name={shoe.productName} id={id} />
      <ProductListBrandName brandName={shoe.brandName} />
      <ProductItemImage src={shoe.thumbnailImageUrl} alt={shoe.productName} />
      <ProductListPrice price={shoe.price} />
    </ProductItem>
  ) : (
    <Redirect to="/" />
  );
};
