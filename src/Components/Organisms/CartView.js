import React, { Fragment, useState, useEffect, useContext } from "react";

import { StoreContext } from "./../../Context";
import { deepCopy, insertCache, priceWithTax } from "./../../Helpers";

import { CartItemsList, CartPriceTotals } from "./../Molecules";
import { EmptyCartMessage } from "./../Atoms";
import { LinkWrapper, Text, PrimaryButton } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartView = () => {
  const {
    cart,
    cart: { itemsCache },
    setCart,
    shoeIdCache
  } = useContext(StoreContext);

  const cartItemsExist = Object.keys(itemsCache).length > 0;
  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState("");
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState("");
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  // Get individual price details for the cart items: pre-tax price, tax, total price.
  useEffect(() => {
    const {
      beforeShipping,
      afterShipping,
      numOfItemsInCart
    } = getTotalPriceOfCart(itemsCache);
    setCartTotalBeforeShipping(beforeShipping);
    setCartTotalAfterShipping(afterShipping);
    setNumItemsInCart(numOfItemsInCart);
    //eslint-disable-next-line
  }, [cart, setCart]);

  // Gets sums up the total price of cart, accounts for shipping.
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
      numOfItemsInCart += numberOfUnits;
    }
    const totalAftershipping = totalBeforeShipping + 5.99;
    return {
      beforeShipping: "$" + totalBeforeShipping.toFixed(2),
      afterShipping: "$" + totalAftershipping.toFixed(2),
      numOfItemsInCart: numOfItemsInCart
    };
  };

  // Handles changes in product quantity from the cart
  const editQuantity = (event, cartId) => {
    const theCart = deepCopy(cart);
    const newQuantity = event.target.value;
    const changeInNumOfItems = newQuantity - theCart.itemsCache[cartId];
    theCart.itemsCache[cartId] = +newQuantity;
    theCart.numOfItems += changeInNumOfItems;
    setCart(theCart);
    insertCache("cart", theCart);
    setNumItemsInCart(theCart.numOfItems);
  };

  // Removes an individual product entirely from the cart
  const removeFromCart = (event, cartId) => {
    const updatedCart = deepCopy(cart);
    const numberOfItemsRemoved = updatedCart.itemsCache[cartId];
    delete updatedCart.itemsCache[cartId];
    updatedCart.numOfItems -= numberOfItemsRemoved;
    setCart(updatedCart);
    insertCache("cart", updatedCart);
    setNumItemsInCart(updatedCart.numOfItems);
  };

  return (
    <Column>
      <Column>
        <Text margin="10px" fontSize="16px">
          {"My Cart"}
        </Text>
      </Column>
      {cartItemsExist ? (
        <Fragment>
          <Column alignItems="center">
            <Column alignItems="center" margin="10px 50px">
              <Text textAlign="center" fontSize="16px">
                {numItemsInCart > 1 ? `${numItemsInCart} Items` : `1 Item`}
              </Text>
              <CartItemsList
                removeFromCart={removeFromCart}
                editQuantity={editQuantity}
                cartItems={itemsCache}
                shoeIdCache={shoeIdCache}
              />
            </Column>
          </Column>
          <Column
            margin="0px 0px"
            alignItems="center"
            justifyContent="flex-start"
          >
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
