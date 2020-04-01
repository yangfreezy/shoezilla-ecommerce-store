import React from "react";

import { ProductListView, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const ProductList = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ProductListView />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
