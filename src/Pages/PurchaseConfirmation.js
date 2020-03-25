import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const PurchaseConfirmation = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>{"youre on the purchase confirmation page son"}</Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
