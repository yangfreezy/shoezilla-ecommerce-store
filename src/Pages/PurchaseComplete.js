import React, { useEffect } from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const PurchaseComplete = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
