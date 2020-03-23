import React from "react";

import { Nav, Footer, Column, PageContainer, PageBody } from "./../Components";
import { CartContainer } from "./../Containers";

export const Cart = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <CartContainer />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
