import React, { useEffect } from "react";

import {
  Nav,
  Footer,
  ProductList,
  PageBody,
  PageContainer,
  Column
} from "./../Components";

export const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
