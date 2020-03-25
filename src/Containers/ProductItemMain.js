import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { getShoeDetails } from "./../API";
import { getAllShoeData, addShoeDetailsToCache } from "./../Helpers";
import { SizeContainer } from ".";
import {
  LoadingAnimation,
  PrimaryButton,
  ProductDetails,
  ProductItemName,
  ProductListBrandName,
  ProductListPrice,
  ProductItemImage
} from "./../Components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 75px 25px 75px;
  justify-content: flex-start;
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 25px 25px 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductItemMain = () => {
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
    /*eslint-disable-next-line*/
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = () => {
    const currentCart = JSON.parse(JSON.stringify(cart));
    if (!currentCart[id]) currentCart[id] = {};
    currentCart[id][size] = ~~currentCart[id][size] + 1;
    currentCart["numOfItems"]++;
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
  if ((!shoe || !shoeDetailsExist) && !requestMade) {
    return <LoadingAnimation />;
  } else if (!shoe && requestMade) {
    return <Redirect to="/" />;
  } else
    return (
      <StyledRow>
        <StyledColumn>
          <ProductItemName name={shoe.productName} id={id} />
          <ProductListBrandName brandName={shoe.brandName} />
          <ProductItemImage
            src={shoe.thumbnailImageUrl}
            alt={shoe.productName}
          />
          <ProductListPrice price={shoe.price} />
          <SizeContainer
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
