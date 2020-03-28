import React from "react";

import { AboutDescription, Nav, Footer } from "./../Components/Organisms";
import { Column, PageContainer, PageBody } from "./../Components/Layouts";

export const About = () => {
  return (
    <PageContainer>
      <PageBody>
        <Nav />
        <Column>
          <AboutDescription />
        </Column>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};
