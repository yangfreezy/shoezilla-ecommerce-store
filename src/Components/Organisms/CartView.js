import React, { Fragment, useState, useEffect, useContext } from "react";

import { StoreContext } from "./../../Context";
import { getTotalPriceOfCart } from "./../../Helpers";

import { CartItemsList, CartPriceTotals } from "./../Molecules";
import { EmptyCartMessage } from "./../Atoms";
import { LinkWrapper, Text, PrimaryButton } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartView = () => {
  const {
    cart,
    cart: { itemsCache },
    setCart,
    shoeIdCache,
    numItemsInCart,
    setNumItemsInCart
  } = useContext(StoreContext);

  /*** State ***/
  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState("");
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState("");

  /*** Hooks ***/
  // Retrieves price details of cart to render
  useEffect(() => {
    const {
      beforeShipping,
      afterShipping,
      numOfItemsInCart
    } = getTotalPriceOfCart(itemsCache, shoeIdCache);
    setCartTotalBeforeShipping(beforeShipping);
    setCartTotalAfterShipping(afterShipping);
    setNumItemsInCart(numOfItemsInCart);
    //eslint-disable-next-line
  }, [cart, setCart]);

  /*** Variable References ***/
  const cartItemQuantityString =
    numItemsInCart > 1 ? `${numItemsInCart} Items` : `1 Item`;

  const cartItemsExist = Object.keys(itemsCache).length > 0;

  return (
    <Column>
      <Column>
        <Text margin="10px" fontSize="16px" text="My Cart" />
      </Column>
      {cartItemsExist ? (
        <Fragment>
          <Column>
            <Column margin="10px 50px">
              <Text fontSize="16px" text={cartItemQuantityString} />
              <CartItemsList cartItems={itemsCache} shoeIdCache={shoeIdCache} />
            </Column>
          </Column>
          <Column justifyContent="flex-start">
            <LinkWrapper to="/purchase">
              <PrimaryButton
                boxShadow
                margin="0px 100px 10px 100px"
                value="Checkout"
              />
            </LinkWrapper>
            <CartPriceTotals
              cartTotalBeforeShipping={cartTotalBeforeShipping}
              cartTotalAfterShipping={cartTotalAfterShipping}
              numOfItems={numItemsInCart}
            />
          </Column>
        </Fragment>
      ) : (
        <EmptyCartMessage />
      )}
    </Column>
  );
};
