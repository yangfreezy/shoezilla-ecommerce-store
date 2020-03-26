import React, { Fragment, useState, useEffect, useContext } from "react";

import { StoreContext } from "./../Context";

import { CartItemsList, CartPriceTotals, Column, Text } from "./../Components";

import { priceWithTax } from "./../Helpers";

export const CartView = () => {
  const value = useContext(StoreContext);
  const { cart, shoeIdCache } = value;
  const cartItems = cart.itemsCache || {};
  const cartItemsExist = Object.keys(cartItems).length > 0;
  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState(0);
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState(0);

  useEffect(() => {
    if (cartItemsExist) {
      const cartTotals = getTotalPriceOfCart(cartItems);
      setCartTotalBeforeShipping(cartTotals.beforeShipping);
      setCartTotalAfterShipping(cartTotals.afterShipping);
    }
    // eslint-disable-next-line
  }, []);

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
      <Column>
        <Text margin="20px 10px 10px 10px" fontSize="16px">
          {"Checkout"}
        </Text>
      </Column>
      {cartItemsExist ? (
        <Fragment>
          <CartItemsList cartItems={cartItems} shoeIdCache={shoeIdCache} />
          <CartPriceTotals
            cartTotalBeforeShipping={cartTotalBeforeShipping}
            cartTotalAfterShipping={cartTotalAfterShipping}
          />
        </Fragment>
      ) : (
        <Column maxWidth="500px">
          <Text margin="15vw 0px 0px 0px" textAlign="center" fontSize="34px">
            {"There's nothing here to buy my good friend!"}
          </Text>
        </Column>
      )}
    </Fragment>
  );
};
