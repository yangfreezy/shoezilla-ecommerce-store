import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Parser from "html-react-parser";

import { ProductFitDetails } from ".";
import { Text, Column } from ".";
import { removeLiTagsWithLinks } from "./../Helpers";

const StyledTitleContainer = styled.div`
  width: 450px;
  margin: 0px 0px 10px 0px;
`;

const StyledDetails = styled.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.5px;
  max-width: 450px;
  text-wrap: wrap;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductDetails = ({ details }) => {
  const description = details.description;
  const descriptionHTML = description
    ? Parser(removeLiTagsWithLinks(details.description))
    : null;
  return (
    <Column>
      <StyledTitleContainer>
        <Text
          fontSize="20px"
          fontWeight="bold"
          text="Product Description"
          textAlign="center"
        />
      </StyledTitleContainer>
      {Object.keys(details).length ? (
        <Fragment>
          <StyledDetails>{descriptionHTML}</StyledDetails>
          <ProductFitDetails details={details} />
        </Fragment>
      ) : (
        <Text
          fontSize="13px"
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
