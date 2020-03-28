import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { StoreContext } from "./../../Context";
import { getShoeDetails } from "./../../API";
import {
  addShoeDetailsToCache,
  deepCopy,
  generateCartId,
  getAllShoeData,
  insertCache
} from "./../../Helpers";

import { SizeDisplay, ProductDetails, ProductItem } from "./../Molecules";
import { LoadingAnimation } from "./../Atoms";
import { PrimaryButton, Text } from "./../Atoms/Abstracted";
import { Row, Column } from "./../Layouts";

export const ProductView = () => {
  const value = useContext(StoreContext);
  const { id } = useParams();
  const { shoeIdCache, setShoeIdCache, cart, setCart, setShoesList } = value;
  const shoe = shoeIdCache[id];
  const [shoeDetails, setShoeDetails] = useState(
    shoe ? (shoe.details ? shoe.details : {}) : {}
  );
  const shoeDetailsExist = Object.keys(shoeDetails).length;
  const [requestMade, setRequestMade] = useState(false);
  const [size, setSize] = useState(6.5);

  useEffect(() => {
    if (!shoe) {
      (async () => {
        const idCache = await getAllShoeData(setShoesList, setShoeIdCache);
        if (!idCache) {
          setRequestMade(true);
          return;
        }
        const details = await getShoeDetails(id);
        if (!details) {
          setRequestMade(true);
          return;
        }
        setShoeDetails(details);
        addShoeDetailsToCache(id, details, idCache, setShoeIdCache);
        setRequestMade(true);
      })();
    } else if (!shoeDetailsExist) {
      (async () => {
        const details = await getShoeDetails(id);
        if (!details) {
          setRequestMade(true);
          return;
        }
        setShoeDetails(details);
        await addShoeDetailsToCache(id, details, shoeIdCache, setShoeIdCache);
        setRequestMade(true);
      })();
    }
    // eslint-disable-next-line
  }, []);

  const addToCart = () => {
    const newCart = deepCopy(cart);
    const cartItems = newCart.itemsCache;
    const cartId = generateCartId(id, size);
    if (!cartItems[cartId]) cartItems[cartId] = {};
    cartItems[cartId] = ~~cartItems[cartId] + 1;
    newCart["numOfItems"]++;
    insertCache("cart", newCart);
    return setCart(newCart);
  };

  const increaseSize = () => {
    if (size === 12.5) return;
    return setSize(size + 0.5);
  };
  const decreaseSize = () => {
    if (size === 6) return;
    return setSize(size - 0.5);
  };

  if ((!shoe || !shoeDetailsExist) && !requestMade) return <LoadingAnimation />;
  if (!shoe && requestMade) return <Redirect to="/" />;

  return (
    <Row>
      <Column justifyContent="flex-start" margin="25px 100px">
        <ProductItem product={shoe} productId={id} />
        <Text text={shoe.price} />
        <SizeDisplay
          increaseSize={increaseSize}
          decreaseSize={decreaseSize}
          size={size}
        />
        <PrimaryButton value="Add to Cart" handleClick={addToCart} />
      </Column>
      <Column justifyContent="flex-start" margin="25px 100px">
        <ProductDetails details={shoeDetails} />
      </Column>
    </Row>
  );
};
