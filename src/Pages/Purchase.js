import React, { useEffect } from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const Purchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>{"youre on the purchase page son"}</Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
