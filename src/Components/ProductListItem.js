import React from "react";
import styled from "styled-components";

import {
  ProductListItemNote,
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
  return (
    <StyledListItem>
      <ProductListName name={product.productName} id={product.productId} />
      <ProductListBrandName brandName={product.brandName} />
      <ProductListThumbnail
        src={product.thumbnailImageUrl}
        alt={product.productName}
        id={product.productId}
      />
      <ProductListPrice price={product.price} />
      {product.isNew && <ProductListItemNote note="New" />}
    </StyledListItem>
  );
};
