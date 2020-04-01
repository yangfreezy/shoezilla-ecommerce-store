import React from "react";
import PropTypes from "prop-types";

import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartPriceTotals = ({
  cartTotalBeforeShipping,
  cartTotalAfterShipping
}) => {
  return (
    <Column margin="10px 100px">
      <Text margin="5px 0px" fontSize="16px">
        {`Total Cost: ${cartTotalAfterShipping}`}
      </Text>
      <Text margin="5px 0px" fontSize="12px">
        {"Shipping: $5.99"}
      </Text>
      <Text
        margin="5px 0px"
        fontSize="12px"
      >{`Subtotal: ${cartTotalBeforeShipping}`}</Text>
    </Column>
  );
};

CartPriceTotals.propTypes = {
  cartTotalBeforeShipping: PropTypes.string,
  cartTotalAfterShipping: PropTypes.string
};
