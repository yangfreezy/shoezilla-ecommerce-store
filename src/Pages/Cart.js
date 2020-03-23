import React, { useEffect } from "react";

import { Nav, Footer, Column, PageContainer, PageBody } from "./../Components";
import { CartContainer } from "./../Containers";

export const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
