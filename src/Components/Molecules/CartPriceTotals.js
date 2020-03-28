import React from "react";
import PropTypes from "prop-types";

import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const CartPriceTotals = ({
  cartTotalBeforeShipping,
  cartTotalAfterShipping,
  numOfItems
}) => {
  return (
    <Column
      justifyContent="center"
      alignItems="flex-center"
      margin="10px 100px"
    >
      <Text textAlign="center" fontSize="16px">
        {`Total Cost: ${cartTotalAfterShipping}`}
      </Text>
      <Text
        textAlign="center"
        fontSize="12px"
      >{`Subtotal: ${cartTotalBeforeShipping}`}</Text>
      <Text textAlign="center" fontSize="12px">
        {"Shipping: $5.99"}
      </Text>
      <Text textAlign="center" fontSize="16px">
        {numOfItems > 1 ? `${numOfItems} Items` : `1 Item`}
      </Text>
    </Column>
  );
};

CartPriceTotals.propTypes = {
  cartTotalBeforeShipping: PropTypes.string,
  cartTotalAfterShipping: PropTypes.string,
  numOfItems: PropTypes.number
};
