import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { getShoeDetails } from "./../API";
import {
  getAllShoeData,
  addShoeDetailsToCache,
  insertCache
} from "./../Helpers";

import {
  LoadingAnimation,
  PriceText,
  PrimaryButton,
  ProductDetails,
  ProductItemName,
  ProductListBrandName,
  ProductItemImage,
  SizeDisplay
} from "./../Components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 100px 25px 100px;
  justify-content: flex-start;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 25px 25px 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    const currentCart = JSON.parse(JSON.stringify(cart));
    const currentCartItems = currentCart.itemsCache;
    if (!currentCartItems[id]) currentCartItems[id] = {};
    currentCartItems[id][size] = ~~currentCartItems[id][size] + 1;
    currentCart["numOfItems"]++;
    insertCache("cart", currentCart);
    return setCart(currentCart);
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
    <StyledRow>
      <StyledColumn>
        <ProductItemName name={shoe.productName} id={id} />
        <ProductListBrandName fontSize="12px" brandName={shoe.brandName} />
        <ProductItemImage src={shoe.thumbnailImageUrl} alt={shoe.productName} />
        <PriceText price={shoe.price} />
        <SizeDisplay
          increaseSize={increaseSize}
          decreaseSize={decreaseSize}
          size={size}
        />
        <PrimaryButton value="Add to Cart" handleClick={addToCart} />
      </StyledColumn>
      <StyledColumn>
        <ProductDetails details={shoeDetails} />
      </StyledColumn>
    </StyledRow>
  );
};
