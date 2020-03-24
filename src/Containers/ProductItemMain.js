import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { getShoeDetails } from "./../API";
import { getAllShoeData, addShoeDetailsToCache } from "./../Helpers";
import { QuantityContainer } from ".";
import {
  Loading,
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
  const needShoe = !shoe;
  const needShoeDetails = !Object.keys(shoeDetails).length;
  const [requestMade, setRequestMade] = useState(false);

  const [quantity, setQuantity] = useState(cart[id] || 0);

  useEffect(() => {
    if (needShoe) {
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
    } else if (needShoeDetails) {
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

  const addToCart = () => {
    if (quantity < 1) return;
    const updatedCart = JSON.parse(JSON.stringify(cart));
    updatedCart[id] = quantity;
    return setCart(updatedCart);
  };

  const increaseQuantity = () => {
    return setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 0) return;
    return setQuantity(quantity - 1);
  };
  if ((needShoe || needShoeDetails) && !requestMade) {
    return <Loading />;
  } else if (needShoe && requestMade) {
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
          <QuantityContainer
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            quantity={quantity}
          />
          <PrimaryButton value="Add to Cart" handleClick={addToCart} />
        </StyledColumn>
        <StyledColumn>
          <ProductDetails details={shoeDetails} />
        </StyledColumn>
      </StyledRow>
    );
};
