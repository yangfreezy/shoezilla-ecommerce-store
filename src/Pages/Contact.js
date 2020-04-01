import React from "react";

import { ContactPage, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const Contact = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <ContactPage />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
