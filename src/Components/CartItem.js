import React from "react";

import { priceWithTax } from "./../Helpers";

import {
  CartPriceDetails,
  Column,
  ProductName,
  ProductBrandName,
  ProductThumbnail,
  QuantitySelection,
  Row
} from ".";

export const CartItem = ({
  productId,
  productUnits,
  product,
  mostDetailedImage
}) => {
  return (
    <Column>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        margin="10px 100px 10px 100px"
        width="45vw"
      >
        <Column alignItems="flex-start">
          <ProductName
            name={product.productName}
            id={productId}
            textAlign="left"
          />
          <ProductBrandName
            brandName={product.brandName}
            fontSize="10px"
            textAlign="left"
          />
          <ProductThumbnail
            src={mostDetailedImage}
            id={productId}
            width="125px"
          />
        </Column>
        <Column alignItems="flex-end" justifyContent="flex-start">
          <CartPriceDetails
            productUnits={productUnits}
            initialPrice={product.price}
            initialPriceWithTax={
              priceWithTax(product.price, 0.065, productUnits).taxCost
            }
            totalPrice={priceWithTax(product.price, 0.065, productUnits).total}
          />
          <QuantitySelection defaultValue={productUnits} />
        </Column>
      </Row>
    </Column>
  );
};
