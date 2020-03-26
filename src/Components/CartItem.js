import React from "react";

import {
  CartPriceDetails,
  Column,
  HoverWrapper,
  LinkWrapper,
  PrimaryButton,
  ProductName,
  ProductBrandName,
  ProductItemImage,
  QuantitySelection,
  Row,
  Text
} from "./../Components";

import { priceWithTax } from "./../Helpers";

export const CartItem = ({
  productId,
  productUnits,
  product,
  mostDetailedImage,
  productSize,
  editQuantity,
  removeFromCart
}) => {
  return (
    <Column>
      <Row justifyContent="space-between" alignItems="flex-start">
        <HoverWrapper>
          <LinkWrapper to={`/product/${productId}`}>
            <Column alignItems="flex-start" margin="25px 50px">
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
              <Text fontSize="10px"> {"Size: Men's " + productSize}</Text>
              <ProductItemImage
                src={mostDetailedImage}
                alt={mostDetailedImage}
                productId={productId}
                width="150px"
              />
            </Column>
          </LinkWrapper>
        </HoverWrapper>
        <Column
          alignItems="flex-end"
          justifyContent="space-between"
          margin="25px 50px"
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
            <QuantitySelection
              editQuantity={e => editQuantity(e, productId, productSize)}
              defaultValue={productUnits}
            />
            <PrimaryButton
              fontSize="10px"
              margin="10px 0px"
              padding="10px 15px"
              handleClick={e => removeFromCart(e, productId, productSize)}
            >
              {"Remove"}
            </PrimaryButton>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};
