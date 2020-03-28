import React from "react";

import { CartView, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

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
