import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { StoreContext } from "./../../Context";
import { getShoeDetails } from "./../../API";
import {
  deepCopy,
  generateCartId,
  getAndMapShoeData,
  insertCache
} from "./../../Helpers";

import { SizeDisplay, ProductDetails, ProductItem } from "./../Molecules";
import { LoadingAnimation } from "./../Atoms";
import { PrimaryButton, Text } from "./../Atoms/Abstracted";
import { Row, Column } from "./../Layouts";

export const ProductView = () => {
  const { productId } = useParams();
  const value = useContext(StoreContext);
  const { shoeIdCache, setShoeIdCache, cart, setCart } = value;
  const currentShoe = shoeIdCache[productId];
  const shoeDetails = currentShoe
    ? currentShoe.details
      ? currentShoe.details
      : null
    : null;

  // Default shoe size
  const [size, setSize] = useState(String(9));
  // Boolean to redirect on invalid productId's
  const [toHome, setToHome] = useState(false);

  // Gets all shoe data and gets shoe details if neither exist
  useEffect(() => {
    if (!currentShoe || !shoeDetails) {
      (async () => {
        let idCache = shoeIdCache;
        if (!currentShoe) {
          const { rawDataList, mappedIdCache } = await getAndMapShoeData();
          insertCache("shoes", rawDataList);
          if (!mappedIdCache[productId]) return setToHome(true);
          idCache = mappedIdCache;
        }
        const details = await getShoeDetails(productId);
        if (!details) return setToHome(true);
        const cacheWithDetails = await deepCopy(idCache);
        cacheWithDetails[productId]["details"] = details;
        insertCache("shoeIdCache", cacheWithDetails);
        setShoeIdCache(cacheWithDetails);
      })();
    }
    //eslint-disable-next-line
  }, []);

  // Adds one item to the cart
  const addToCart = () => {
    const newCart = deepCopy(cart);
    const cartItems = newCart.itemsCache;
    const cartId = generateCartId(productId, size);
    if (!cartItems[cartId]) cartItems[cartId] = {};
    cartItems[cartId] = ~~cartItems[cartId] + 1;
    newCart["numOfItems"]++;
    insertCache("cart", newCart);
    return setCart(newCart);
  };

  if (toHome) return <Redirect to="/" />;
  else if (!currentShoe || !shoeDetails) return <LoadingAnimation />;
  else {
    return (
      <Row>
        <Column justifyContent="flex-start" margin="25px 100px">
          <ProductItem product={currentShoe} productId={productId} />
          <Text text={currentShoe.price} />
          <SizeDisplay setSize={setSize} size={size} />
          <PrimaryButton value="Add to Cart" handleClick={addToCart} />
        </Column>
        <Column justifyContent="flex-start" margin="25px 100px">
          <ProductDetails details={shoeDetails} />
        </Column>
      </Row>
    );
  }
};
