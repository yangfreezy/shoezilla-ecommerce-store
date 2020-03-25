import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";
import { ProductView } from "./../Containers";

export const Product = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ProductView />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
