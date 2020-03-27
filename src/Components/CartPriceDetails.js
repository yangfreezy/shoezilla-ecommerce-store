import React from "react";
import PropTypes from "prop-types";

import { Text, Column } from ".";

export const CartPriceDetails = ({
  initialPrice,
  initialPriceWithTax,
  totalPrice,
  productUnits
}) => {
  return (
    <Column alignItems="flex-end">
      <Text
        textAlign="right"
        fontSize="12px"
        text={productUnits + " x " + initialPrice}
      />
      <Text textAlign="right" text={"Total: " + totalPrice} fontSize="10px" />
      <Text
        textAlign="right"
        text={"Tax: " + initialPriceWithTax}
        fontSize="10px"
      />
    </Column>
  );
};

CartPriceDetails.propTypes = {
  initialPrice: PropTypes.string,
  initialPriceWithTax: PropTypes.string,
  totalPrice: PropTypes.string,
  productUnits: PropTypes.number
};
