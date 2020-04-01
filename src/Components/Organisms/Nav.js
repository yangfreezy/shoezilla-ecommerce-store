import React from "react";

import { HomeButton, CartIcon, MainLogo } from "./../Atoms";
import { NavLayout } from "./../Layouts";

export const Nav = () => {
  return (
    <NavLayout>
      <HomeButton />
      <MainLogo width="115px" />
      <CartIcon />
    </NavLayout>
  );
};
