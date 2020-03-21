import React, { Fragment } from "react";
import styled from "styled-components";

import { Nav, ProductList } from "./../Components/";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = () => {
  return (
    <Fragment>
      <Nav />
      <StyledPage>
        <ProductList />
      </StyledPage>
    </Fragment>
  );
};
