import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const PurchaseComplete = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          {"Your order is set! Check your e-mail for confirmation details."}
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
