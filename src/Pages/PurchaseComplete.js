import React from "react";

import { Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

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
