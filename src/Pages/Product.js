import React, { useEffect } from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";
import { ProductItemMain } from "./../Containers";

export const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
