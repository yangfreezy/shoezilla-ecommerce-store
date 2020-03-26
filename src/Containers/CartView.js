import React, { Fragment, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { StoreContext } from "./../Context";

import {
  CartItemsList,
  CartPriceTotals,
  Column,
  Text,
  PrimaryButton
} from "./../Components";

import { priceWithTax } from "./../Helpers";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
`;

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
        <Text margin="10px" fontSize="16px">
          {"My Cart"}
        </Text>
      </Column>
      {cartItemsExist ? (
        <Column alignItems="flex-end">
          <Column alignItems="space-between" margin="10px 50px">
            <CartItemsList cartItems={cartItems} shoeIdCache={shoeIdCache} />
          </Column>
          <Column alignItems="flex-end" justifyContent="flex-start">
            <CartPriceTotals
              cartTotalBeforeShipping={cartTotalBeforeShipping}
              cartTotalAfterShipping={cartTotalAfterShipping}
            />
            <StyledLink to="/purchase">
              <PrimaryButton
                margin="10px 100px"
                value="Checkout"
              ></PrimaryButton>
            </StyledLink>
          </Column>
        </Column>
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
