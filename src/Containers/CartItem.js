import React, { useContext } from "react";

import { StoreContext } from "./../Context";

import { insertCache, priceWithTax } from "./../Helpers";

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

export const CartItem = ({
  productId,
  productUnits,
  product,
  mostDetailedImage,
  size
}) => {
  const value = useContext(StoreContext);
  const { cart, setCart } = value;

  const editQuantity = event => {
    const newQuantity = event.target.value;
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const difference = newQuantity - updatedCart.itemsCache[productId][size];
    updatedCart.itemsCache[productId][size] = newQuantity;
    updatedCart.numOfItems += difference;
    setCart(updatedCart);
    insertCache("cart", updatedCart);
  };

  const removeFromCart = () => {
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const numberOfItemsRemoved = updatedCart.itemsCache[productId][size];
    delete updatedCart.itemsCache[productId][size];
    updatedCart.numOfItems -= numberOfItemsRemoved;
    if (!Object.keys(updatedCart.itemsCache[productId]).length) {
      delete updatedCart.itemsCache[productId];
    }
    setCart(updatedCart);
    insertCache("cart", updatedCart);
  };

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
              <Text fontSize="10px"> {"Size: Men's " + size}</Text>
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
              editQuantity={editQuantity}
              defaultValue={productUnits}
            />
            <PrimaryButton
              fontSize="10px"
              margin="10px 0px"
              padding="10px 15px"
              handleClick={removeFromCart}
            >
              {"Remove"}
            </PrimaryButton>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};
