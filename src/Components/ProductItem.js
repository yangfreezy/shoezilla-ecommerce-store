import React, { Fragment } from "react";

import { ProductName, ProductBrandName, ProductItemImage } from ".";

export const ProductItem = ({ product, productId }) => {
  return (
    <Fragment>
      <ProductName name={product.productName} productId={productId} />
      <ProductBrandName fontSize="12px" brandName={product.brandName} />
      <ProductItemImage
        src={product.thumbnailImageUrl}
        alt={product.productName}
      />
    </Fragment>
  );
};
