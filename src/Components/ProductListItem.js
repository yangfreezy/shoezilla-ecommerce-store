import React from "react";

import {
  Column,
  PriceText,
  Text,
  ProductListName,
  ProductListBrandName,
  ProductListThumbnail
} from ".";

export const ProductListItem = ({ product }) => {
  return (
    <Column margin="50px 50px 50px 50px">
      <ProductListName name={product.productName} id={product.productId} />
      <ProductListBrandName fontSize="10px" brandName={product.brandName} />
      <ProductListThumbnail
        src={product.thumbnailImageUrl}
        alt={product.productName}
        id={product.productId}
      />
      <PriceText price={product.price} />
      {product.isNew && (
        <Text
          fontSize="10px"
          textAlign="center"
          margin="10px 10px 0px 10px"
          text="New"
        />
      )}
    </Column>
  );
};
