import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { StoreContext } from "./../Context";
import { QuantityIncrementer, QuantityDisplay } from ".";

const StyledQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuantityContainer = () => {
  const value = useContext(StoreContext);
  const { id } = useParams();
  const { cart, setCart } = value;
  const [quantity, setQuantity] = useState(cart[id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    const updatedCart = cart;
    updatedCart[id]++;
    setCart(updatedCart);
  };
  const decreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
    const updatedCart = cart;
    updatedCart[id]--;
    setCart(updatedCart);
  };

  return (
    <StyledQuantityContainer>
      <QuantityIncrementer direction={"up"} handleClick={increaseQuantity} />
      <QuantityDisplay quantity={quantity} />
      <QuantityIncrementer direction={"down"} handleClick={decreaseQuantity} />
    </StyledQuantityContainer>
  );
};
