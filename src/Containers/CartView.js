import React, { Fragment, useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "./../Context";

export const CartView = () => {
  const value = useContext(StoreContext);
  const { cart, shoeIdCache } = value;
  const cartItems = cart.itemsCache || {};

  return (
    <Fragment>
      {Object.keys(cartItems).map(productId => {
        console.log(shoeIdCache[productId]);
        return <div>{productId}</div>;
      })}
    </Fragment>
  );
};
