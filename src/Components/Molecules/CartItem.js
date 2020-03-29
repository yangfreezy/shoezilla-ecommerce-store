import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { priceWithTax } from "./../../Helpers";

import { CartPriceDetails, QuantitySelection } from ".";
import { ProductName, ProductBrandName, ProductItemImage } from "./../Atoms";
import { LinkWrapper, PrimaryButton, Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper, Column } from "./../Layouts";

const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  width: 100%;

  > * {
    align-items: center;
    text-align: center;
    margin: 0px 10px;
  }

  @media only screen and (min-width: 375px) {
    margin: 5px 0px;
    > * {
      margin: 5px 0px;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 620px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    > * > * {
      margin: 5px 60px;
    }
  }
`;

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
      <StyledCartItem>
        <Column>
          <LinkWrapper to={`/product/${productId}`}>
            <ProductName
              name={product.productName}
              productId={productId}
              width="150px"
            />
          </LinkWrapper>
          <ProductBrandName brandName={product.brandName} fontSize="10px" />
          <Text fontSize="10px"> {"Size: Men's " + productSize}</Text>
          <LinkWrapper to={`/product/${productId}`}>
            <ProductItemImage
              src={mostDetailedImage}
              alt={mostDetailedImage}
              id={productId}
              width="150px"
            />
          </LinkWrapper>
        </Column>
        <Column width="150px">
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
              editQuantity={e => editQuantity(e, cartId)}
              defaultValue={productUnits}
            />
            <PrimaryButton
              fontSize="10px"
              padding="12px 15px"
              handleClick={e => removeFromCart(e, cartId)}
              value="Remove"
            />
          </Column>
        </Column>
      </StyledCartItem>
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
