import React, { useEffect } from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const PurchaseConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
