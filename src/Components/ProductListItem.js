import React from "react";

import {
  Column,
  HoverWrapper,
  LinkWrapper,
  Text,
  ProductName,
  ProductBrandName,
  ProductThumbnail
} from ".";

export const ProductListItem = ({ product }) => {
  return (
    <HoverWrapper>
      <LinkWrapper to={`/product/${product.productId}`}>
        <Column margin="50px 50px 50px 50px">
          <ProductName
            name={product.productName}
            productId={product.productId}
            fontWeight="600"
          />
          <ProductBrandName fontSize="10px" brandName={product.brandName} />
          <ProductThumbnail
            src={product.thumbnailImageUrl}
            alt={product.productName}
            id={product.productId}
          />
          <Text>{product.price} </Text>
          {product.isNew && (
            <Text
              fontSize="10px"
              textAlign="center"
              margin="10px 10px 10px 10px"
              text="New"
            />
          )}
        </Column>
      </LinkWrapper>
    </HoverWrapper>
  );
};
