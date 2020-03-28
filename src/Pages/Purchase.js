import React from "react";

import { Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const Purchase = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>{"Coming soon!"}</Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
