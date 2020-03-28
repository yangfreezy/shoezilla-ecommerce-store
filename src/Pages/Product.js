import React from "react";

import { ProductView, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

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
