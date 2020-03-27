import React, { useContext, useState, useEffect } from "react";
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

  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState(0);
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState(0);
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  useEffect(() => {
    const {
      beforeShipping,
      afterShipping,
      numOfItemsInCart
    } = getTotalPriceOfCart(cartItems);
    setCartTotalBeforeShipping(beforeShipping);
    setCartTotalAfterShipping(afterShipping);
    setNumItemsInCart(numOfItemsInCart);
    //eslint-disable-next-line
  }, [cart, setCart]);

  const editQuantity = (event, cartId) => {
    const newQuantity = event.target.value;
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const difference = newQuantity - updatedCart.itemsCache[cartId];
    updatedCart.itemsCache[cartId] = +newQuantity;
    updatedCart.numOfItems += difference;
    setCart(updatedCart);
    insertCache("cart", updatedCart);
    setNumItemsInCart(updatedCart.numOfItems);
  };

  const removeFromCart = (event, cartId) => {
    const updatedCart = JSON.parse(JSON.stringify(cart));
    const numberOfItemsRemoved = updatedCart.itemsCache[cartId];
    delete updatedCart.itemsCache[cartId];
    updatedCart.numOfItems -= numberOfItemsRemoved;
    setCart(updatedCart);
    insertCache("cart", updatedCart);
    setNumItemsInCart(updatedCart.numOfItems);
  };

  const getTotalPriceOfCart = cartItems => {
    let totalBeforeShipping = 0;
    let numOfItemsInCart = 0;
    for (var cartId in cartItems) {
      const [productId] = cartId.split("/");
      const numberOfUnits = cartItems[cartId];
      const taxRate = 0.065;
      const costAfterTax = +priceWithTax(
        shoeIdCache[productId].price,
        taxRate,
        numberOfUnits
      ).total.slice(1);
      totalBeforeShipping += costAfterTax;
      console.log(typeof numberOfUnits);
      numOfItemsInCart += numberOfUnits;
    }
    const totalAftershipping = totalBeforeShipping + 5.99;
    return {
      beforeShipping: "$" + totalBeforeShipping.toFixed(2),
      afterShipping: "$" + totalAftershipping.toFixed(2),
      numOfItemsInCart: numOfItemsInCart
    };
  };

  return (
    <Column margin="25px 0px">
      {Object.keys(cartItems).map(cartId => {
        const [productId, productSize] = cartId.split("/");
        const product = shoeIdCache[productId];
        const productUnits = cartItems[cartId];
        const mostDetailedImage = product.details
          ? "https://www.zappos.com" + product.details.defaultImageUrl
          : product.thumbnailImageUrl;

        return (
          <Column key={cartId} alignItems="flex-end" margin="0px">
            <CartItem
              cartId={cartId}
              product={product}
              productId={productId}
              productUnits={productUnits}
              mostDetailedImage={mostDetailedImage}
              productSize={productSize}
              removeFromCart={removeFromCart}
              editQuantity={editQuantity}
            />
          </Column>
        );
      })}
      <Column margin="50px 0px" alignItems="center" justifyContent="flex-start">
        <CartPriceTotals
          cartTotalBeforeShipping={cartTotalBeforeShipping}
          cartTotalAfterShipping={cartTotalAfterShipping}
          numOfItems={numItemsInCart}
        />
        <StyledLink to="/purchase">
          <PrimaryButton
            boxShadow="5px 5px 10px #888888"
            margin="10px 100px"
            value="Checkout"
          ></PrimaryButton>
        </StyledLink>
      </Column>
    </Column>
  );
};
