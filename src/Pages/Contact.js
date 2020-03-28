import React from "react";

import { ContactDescription, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

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
