import React, { Fragment, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  CartItem,
  CartPriceTotals,
  Column,
  PrimaryButton
} from "./../Components";
import { StoreContext } from "./../Context";
import { insertCache, priceWithTax } from "./../Helpers";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
`;

export const CartItemsList = ({ cartItems, shoeIdCache }) => {
  const value = useContext(StoreContext);
  const { cart, setCart } = value;

  const editQuantity = (event, productId, productSize) => {
    const newQuantity = event.target.value;
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const difference =
      newQuantity - updatedCart.itemsCache[productId][productSize];
    updatedCart.itemsCache[productId][productSize] = newQuantity;
    updatedCart.numOfItems += difference;
    setCart(updatedCart);
    insertCache("cart", updatedCart);
  };

  const removeFromCart = (event, productId, productSize) => {
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const numberOfItemsRemoved = updatedCart.itemsCache[productId][productSize];
    delete updatedCart.itemsCache[productId][productSize];
    updatedCart.numOfItems -= numberOfItemsRemoved;
    if (!Object.keys(updatedCart.itemsCache[productId]).length) {
      delete updatedCart.itemsCache[productId];
    }
    setCart(updatedCart);
    insertCache("cart", updatedCart);
  };

  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState(0);
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState(0);

  useEffect(() => {
    const cartTotals = getTotalPriceOfCart(cartItems);
    setCartTotalBeforeShipping(cartTotals.beforeShipping);
    setCartTotalAfterShipping(cartTotals.afterShipping);
    //eslint-disable-next-line
  }, [cart, setCart]);

  const getTotalPriceOfCart = cartItems => {
    let totalBeforeShipping = 0;
    for (var productId in cartItems) {
      for (var productSizeQuantities in cartItems[productId]) {
        const numberOfUnits = cartItems[productId][productSizeQuantities];
        const taxRate = 0.065;
        const costAfterTax = +priceWithTax(
          shoeIdCache[productId].price,
          taxRate,
          numberOfUnits
        ).total.slice(1);
        totalBeforeShipping += costAfterTax;
      }
    }
    const totalAftershipping = totalBeforeShipping + 5.99;
    return {
      beforeShipping: "$" + totalBeforeShipping.toFixed(2),
      afterShipping: "$" + totalAftershipping.toFixed(2)
    };
  };

  return (
    <Fragment>
      {Object.keys(cartItems).map(productId => {
        const productsBySize = Object.keys(cartItems[productId]);
        return productsBySize.map(productSize => {
          const product = shoeIdCache[productId];
          const mostDetailedImage = product.details
            ? "https://www.zappos.com" + product.details.defaultImageUrl
            : product.thumbnailImageUrl;
          const productUnits = cartItems[productId][productSize];
          return (
            <Column alignItems="flex-end" margin="0px">
              <CartItem
                key={productId + "/" + product.colorId + "/" + productSize}
                product={product}
                productId={productId}
                productUnits={productUnits}
                mostDetailedImage={mostDetailedImage}
                productSize={productSize}
                removeFromCart={removeFromCart}
                editQuantity={editQuantity}
              />
              <Column alignItems="flex-end" justifyContent="flex-start">
                <CartPriceTotals
                  cartTotalBeforeShipping={cartTotalBeforeShipping}
                  cartTotalAfterShipping={cartTotalAfterShipping}
                />
                <StyledLink to="/purchase">
                  <PrimaryButton
                    margin="10px 50px"
                    value="Checkout"
                  ></PrimaryButton>
                </StyledLink>
              </Column>
            </Column>
          );
        });
      })}
    </Fragment>
  );
};
