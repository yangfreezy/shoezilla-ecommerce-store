import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import cartIcon from "./../Assets/cart-icon.png";

const StyledCartNumber = styled.div`
  color: white;
  position: relative;
  bottom: 31px;
  left: 1px;
  font-size: 6px;
  font-weight: bolder;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  align-items: center;
`;

const StyledIcon = styled.img.attrs({
  src: cartIcon
})`
  width: 24px;
  height: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CartIcon = () => {
  const value = useContext(StoreContext);
  const { cart } = value;
  return (
    <StyledLink to="/cart">
      <StyledIcon />
      {cart.size >= 1 && <StyledCartNumber>{cart.size}</StyledCartNumber>}
    </StyledLink>
  );
};
