import React from "react";

import { Nav, Footer, Column, PageContainer, PageBody } from "./../Components";
import { CartView } from "./../Containers";

export const Cart = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <CartView />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
