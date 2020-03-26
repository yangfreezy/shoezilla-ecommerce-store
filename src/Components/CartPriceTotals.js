import React from "react";

import { Text, Column } from ".";

export const CartPriceTotals = ({
  cartTotalBeforeShipping,
  cartTotalAfterShipping
}) => {
  return (
    <Column justifyContent="center" alignItems="flex-end" margin="10px 50px">
      <Text textAlign="right" fontSize="12px">
        {"Shipping: $5.99"}
      </Text>
      <Text
        textAlign="right"
        fontSize="12px"
      >{`Subtotal: ${cartTotalBeforeShipping}`}</Text>
      <Text textAlign="right" fontSize="16px">
        {`Total: ${cartTotalAfterShipping}`}
      </Text>
    </Column>
  );
};
