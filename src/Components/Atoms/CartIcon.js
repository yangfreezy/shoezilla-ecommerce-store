import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../../Context";
import cartIcon from "./../../Assets/cart-icon.png";

const StyledCartNumber = styled.div`
  color: white;
  position: relative;
  bottom: 36px;
  left: 5px;
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

const StickyWrapper = styled.div`
  position: fixed;
  top: 30px;
`;

export const CartIcon = () => {
  const {
    cart: { numOfItems }
  } = useContext(StoreContext);
  const showCartItems = numOfItems >= 1;
  return (
    <StyledLink to="/cart">
      <StickyWrapper>
        <StyledIcon />
        {showCartItems && <StyledCartNumber>{numOfItems}</StyledCartNumber>}
      </StickyWrapper>
    </StyledLink>
  );
};
