import React from "react";
import styled from "styled-components";

import { HomeButton, CartIcon, MainLogo } from ".";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px 20px 50px;
`;

export const Nav = () => {
  return (
    <NavBar>
      <HomeButton />
      <MainLogo width={"115px"} />
      <CartIcon />
    </NavBar>
  );
};
