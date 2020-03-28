import React from "react";

import { ProductList, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const Home = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ProductList />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
