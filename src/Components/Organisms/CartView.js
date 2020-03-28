import React, { Fragment, useContext } from "react";

import { StoreContext } from "./../../Context";
import { CartItemsList } from "./../Molecules";
import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartView = () => {
  const value = useContext(StoreContext);
  const { cart, shoeIdCache } = value;
  const cartItems = cart.itemsCache;
  const cartItemsExist = Object.keys(cartItems).length > 0;
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
        </Column>
      ) : (
        <Column maxWidth="500px">
          <Text margin="15vw 0px 0px 0px" textAlign="center" fontSize="34px">
            {"Your shopping cart is empty!"}
          </Text>
        </Column>
      )}
    </Fragment>
  );
};
