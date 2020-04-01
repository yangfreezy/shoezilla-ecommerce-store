import React from "react";

import { AboutView, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const About = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <AboutView />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
