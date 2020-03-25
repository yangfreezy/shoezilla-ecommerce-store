import React from "react";

import {
  Nav,
  Footer,
  ProductList,
  PageBody,
  PageContainer,
  Column
} from "./../Components";

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
