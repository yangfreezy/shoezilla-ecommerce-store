import React from "react";

import { ContactView, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const Contact = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ContactView />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
