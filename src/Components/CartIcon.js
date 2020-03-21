import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import cartIcon from "./../Assets/cart-icon.png";

const StyledIcon = styled.img.attrs({
  src: cartIcon
})`
  width: 24px;
  height: 24px;
`;

export const CartIcon = () => (
  <Link to="/cart">
    <StyledIcon />
  </Link>
);
