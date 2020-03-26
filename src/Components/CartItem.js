import React from "react";

import { priceWithTax } from "./../Helpers";

import {
  CartPriceDetails,
  Column,
  PrimaryButton,
  ProductName,
  ProductBrandName,
  ProductItemImage,
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
      <Row justifyContent="space-between" alignItems="flex-start">
        <Column alignItems="flex-start" margin="0px 50px">
          <ProductName
            name={product.productName}
            productId={productId}
            textAlign="left"
          />
          <ProductBrandName
            brandName={product.brandName}
            fontSize="10px"
            textAlign="left"
          />
          <ProductItemImage
            src={mostDetailedImage}
            alt={mostDetailedImage}
            productId={productId}
            width="150px"
          />
        </Column>
        <Column
          alignItems="flex-end"
          justifyContent="space-between"
          margin="0px 50px"
        >
          <Column>
            <CartPriceDetails
              productUnits={productUnits}
              initialPrice={product.price}
              initialPriceWithTax={
                priceWithTax(product.price, 0.065, productUnits).taxCost
              }
              totalPrice={
                priceWithTax(product.price, 0.065, productUnits).total
              }
            />
          </Column>
          <Column>
            <QuantitySelection defaultValue={productUnits} />
            <PrimaryButton
              fontSize="10px"
              margin="10px 0px"
              padding="10px 15px"
            >
              {"Remove"}
            </PrimaryButton>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};
