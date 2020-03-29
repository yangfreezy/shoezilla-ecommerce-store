import React from "react";
import PropTypes from "prop-types";

import { priceWithTax } from "./../../Helpers";

import { CartPriceDetails, QuantitySelection } from ".";
import { ProductName, ProductBrandName, ProductItemImage } from "./../Atoms";
import { PrimaryButton, Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper, Column, Row } from "./../Layouts";

export const CartItem = ({
  cartId,
  productId,
  productUnits,
  product,
  mostDetailedImage,
  productSize,
  editQuantity,
  removeFromCart
}) => {
  return (
    <BoxShadowWrapper>
      <Row
        margin="10px 0px"
        width="100%"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Column alignItems="flex-start" margin="50px 100px">
          <ProductName
            name={product.productName}
            productId={productId}
            textAlign="left"
            width="150px"
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
            id={productId}
            width="150px"
          />
        </Column>
        <Column
          alignItems="flex-end"
          justifyContent="space-between"
          margin="50px 100px"
          width="150px"
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
          <Column margin="0px 0px">
            <QuantitySelection
              editQuantity={e => editQuantity(e, cartId)}
              defaultValue={productUnits}
            />
            <PrimaryButton
              fontSize="10px"
              margin="10px 0px"
              padding="10px 15px"
              handleClick={e => removeFromCart(e, cartId)}
            >
              {"Remove"}
            </PrimaryButton>
          </Column>
        </Column>
      </Row>
    </BoxShadowWrapper>
  );
};

CartItem.propTypes = {
  cartId: PropTypes.string,
  productId: PropTypes.string,
  productUnits: PropTypes.number,
  product: PropTypes.object,
  mostDetailedImage: PropTypes.string,
  productSize: PropTypes.string,
  editQuantity: PropTypes.func,
  removeFromCart: PropTypes.func
};
