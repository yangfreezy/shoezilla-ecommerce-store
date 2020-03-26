import React from "react";

import {
  Column,
  PriceText,
  Text,
  ProductName,
  ProductBrandName,
  ProductThumbnail
} from ".";

export const ProductListItem = ({ product }) => {
  return (
    <Column margin="50px 50px 50px 50px">
      <ProductName name={product.productName} productId={product.productId} />
      <ProductBrandName fontSize="10px" brandName={product.brandName} />
      <ProductThumbnail
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
