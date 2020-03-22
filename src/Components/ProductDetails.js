import React, { Fragment } from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import { Text, ProductFitDetails } from ".";
import { Column } from "./Layouts";

const StyledTitle = styled.div`
  text-align: center;
  width: 350px;
`;

const StyledDetails = styled.div`
  font-size: 13px;
  font-weight: normal;
  width: 350px;
  max-width: 350px;
  text-wrap: wrap;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductDetails = ({ details }) => {
  const description = details.description;
  const descriptionHTML = description ? Parser(details.description) : null;
  return (
    <Column>
      <StyledTitle>
        <Text fontSize="20px" fontWeight="bold" text="Product Description" />
      </StyledTitle>
      {Object.keys(details).length ? (
        <Fragment>
          <StyledDetails>{descriptionHTML}</StyledDetails>
          <ProductFitDetails details={details} />
        </Fragment>
      ) : (
        <Text fontSize="13px" fontWeight="normal" text="Loading details.." />
      )}
    </Column>
  );
};
