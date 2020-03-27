import React from "react";

import { Nav, Footer, Column, PageContainer, PageBody } from "./../Components";
import { AboutDescription } from "./../Components";

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
