import React from "react";
import PropTypes from "prop-types";

import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartPriceDetails = ({
  initialPrice,
  initialPriceWithTax,
  totalPrice,
  productUnits
}) => {
  return (
    <Column alignItems="center" justifyContent="space-between">
      <Text
        textAlign="center"
        fontSize="12px"
        text={productUnits + " x " + initialPrice}
      />
      <Text
        textAlign="center"
        text={"Tax: " + initialPriceWithTax}
        fontSize="10px"
      />
      <Text textAlign="center" text={"Total: " + totalPrice} fontSize="10px" />
    </Column>
  );
};

CartPriceDetails.propTypes = {
  initialPrice: PropTypes.string,
  initialPriceWithTax: PropTypes.string,
  totalPrice: PropTypes.string,
  productUnits: PropTypes.number
};
