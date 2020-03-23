import React from "react";

import {
  Nav,
  Footer,
  ProductList,
  PageContainer,
  Column
} from "./../Components";

export const Main = () => {
  return (
    <PageContainer>
      <Nav />
      <Column>
        <ProductList />
      </Column>
      <Footer />
    </PageContainer>
  );
};
