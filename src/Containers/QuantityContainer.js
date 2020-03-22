import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { StoreContext } from "./../Context";
import {
  QuantityIncrementer,
  QuantityDisplay,
  ProductListItemNote
} from "./../Components";

const StyledQuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityContainer = () => {
  const value = useContext(StoreContext);
  const { id } = useParams();
  const { cart, setCart } = value;
  const [quantity, setQuantity] = useState(cart[id] || 0);

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
    <StyledColumn>
      <ProductListItemNote fontSize="12px" fontWeight="light" note="Quantity" />
      <StyledQuantityContainer>
        <QuantityIncrementer
          direction={"down"}
          handleClick={decreaseQuantity}
        />
        <QuantityDisplay quantity={quantity} />
        <QuantityIncrementer direction={"up"} handleClick={increaseQuantity} />
      </StyledQuantityContainer>
    </StyledColumn>
  );
};
