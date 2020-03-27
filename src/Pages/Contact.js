import React from "react";

import { Nav, Footer, Column, PageContainer, PageBody } from "./../Components";
import { ContactDescription } from "./../Components";

export const Contact = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ContactDescription />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
