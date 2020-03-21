import React from "react";
import styled from "styled-components";

import {
  ProductListName,
  ProductListBrandName,
  ProductListPrice,
  ProductListThumbnail
} from ".";

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 50px 50px 50px;
  text-align: center;
`;

export const ProductListItem = ({ product }) => {
  console.log(product);
  return (
    <StyledListItem>
      <ProductListName name={product.productName} />
      <ProductListBrandName brandName={product.brandName} />
      <ProductListThumbnail
        src={product.thumbnailImageUrl}
        alt={product.productName}
      />
      <ProductListPrice price={product.price} />
    </StyledListItem>
  );
};
