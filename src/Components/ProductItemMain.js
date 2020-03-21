import React, { useContext } from "react";
import { useParams } from "react-router-dom";
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
  console.log(value.shoeIdCache);
  const shoe = value.shoeIdCache[id];
  const { productName, brandName, thumbnailImageUrl, price } = shoe;

  return (
    <ProductItem>
      <ProductListName name={productName} id={id} />
      <ProductListBrandName brandName={brandName} />
      <ProductItemImage src={thumbnailImageUrl} alt={productName} />
      <ProductListPrice price={price} />
      {console.log(shoe)}
    </ProductItem>
  );
};
