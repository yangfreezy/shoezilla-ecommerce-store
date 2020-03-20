import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HomeButton, CartIcon, MainLogo } from ".";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 50px 20px 50px;
`;

export const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <HomeButton />
      </Link>
      <Link to="/">
        <MainLogo />
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </NavBar>
  );
};
