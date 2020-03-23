import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";
import { ProductItemMain } from "./../Containers";

export const Product = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ProductItemMain />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
