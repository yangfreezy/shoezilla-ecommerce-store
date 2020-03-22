import React, { useState, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { getShoeDetails } from "./../API";
import { addShoeDetailsToCache } from "./../Helpers";
import { QuantityContainer } from ".";
import {
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
  margin: 25px 25px 0px 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductItemMain = () => {
  const value = useContext(StoreContext);
  const { id } = useParams();
  const { shoeIdCache, setShoeIdCache, cart, setCart } = value;
  const shoe = shoeIdCache[id];
  const [shoeDetails, setShoeDetails] = useState(shoe.details || {});
  const [quantity, setQuantity] = useState(cart[id] || 0);
  const [requestAttempts, setRequestAttempts] = useState(0);

  (async () => {
    if (!shoe.details && requestAttempts < 1) {
      const details = await getShoeDetails(id);
      setShoeDetails(details);
      setRequestAttempts(requestAttempts + 1);
      return addShoeDetailsToCache(id, details, shoeIdCache, setShoeIdCache);
    }
  })();

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

  return shoe ? (
    <StyledColumn>
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
    </StyledColumn>
  ) : (
    <Redirect to="/" />
  );
};
