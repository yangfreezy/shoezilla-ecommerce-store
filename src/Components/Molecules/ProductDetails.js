import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Parser from "html-react-parser";

import { removeLiTagsWithLinks } from "./../../Helpers";
import { ProductFitDetails } from ".";
import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 225px;
  max-width: 225px;
  > * > * > * {
    font-size: 12px;
    margin: 5px 5px;
  }

  @media only screen and (min-width: 620px) {
    width: 500px;
    max-width: 500px;
    > * > * > * {
      font-size: 14px;
      margin: 5px 5px;
    }
  }

  @media only screen and (min-width: 1000px) {
    width: 425px;
    max-width: 425px;
    > * > * > * {
      margin: 0px 5px;
      font-size: 13px;
      font-weight: light;
    }
  }
`;

export const ProductDetails = ({ details }) => {
  const description = details.description;
  const descriptionHTML = description
    ? Parser(removeLiTagsWithLinks(details.description))
    : null;
  const detailsExist = Object.keys(details).length;
  return (
    <Column>
      <StyledDetails>
        <Text fontSize="18px" fontWeight="bold" text="Product Description" />
      </StyledDetails>
      {detailsExist && (
        <StyledDetails>
          <Text fontSize="14px">{descriptionHTML}</Text>
          <ProductFitDetails details={details} />
        </StyledDetails>
      )}
      {!detailsExist && (
        <Text
          fontSize="14px"
          fontWeight="normal"
          textAlign="center"
          text="Getting product details.."
        />
      )}
    </Column>
  );
};

ProductDetails.propTypes = {
  details: PropTypes.object
};
