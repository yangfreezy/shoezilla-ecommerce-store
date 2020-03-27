import React from "react";

import { Nav, Footer, Column, PageBody, PageContainer } from "./../Components";

export const Purchase = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>{"Purchase"}</Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
