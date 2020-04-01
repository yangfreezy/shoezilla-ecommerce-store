import React from "react";

import { AboutPage, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const About = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <AboutPage />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
