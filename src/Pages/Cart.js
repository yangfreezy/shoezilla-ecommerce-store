import React from "react";

import { Nav, Footer, Column, PageContainer } from "./../Components";
import { CartContainer } from "./../Containers";

export const Cart = () => {
  return (
    <PageContainer>
      <Nav />
      <Column>
        <CartContainer />
      </Column>
      <Footer />
    </PageContainer>
  );
};
