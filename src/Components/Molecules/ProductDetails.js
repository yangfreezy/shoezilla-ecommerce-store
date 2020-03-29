import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Parser from "html-react-parser";

import { removeLiTagsWithLinks } from "./../../Helpers";

import { ProductFitDetails } from ".";
import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const ProductDetails = ({ details }) => {
  const description = details.description;
  const descriptionHTML = description
    ? Parser(removeLiTagsWithLinks(details.description))
    : null;
  return (
    <Column>
      <Column width="450px">
        <Text
          fontSize="20px"
          fontWeight="bold"
          text="Product Description"
          textAlign="center"
        />
      </Column>
      {Object.keys(details).length ? (
        <Fragment>
          <Text maxWidth="450px" fontSize="14px">
            {descriptionHTML}
          </Text>
          <ProductFitDetails details={details} />
        </Fragment>
      ) : (
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
