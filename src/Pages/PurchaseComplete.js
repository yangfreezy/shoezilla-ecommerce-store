import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const PurchaseComplete = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>{"youre on the purchase complete page son"}</Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
