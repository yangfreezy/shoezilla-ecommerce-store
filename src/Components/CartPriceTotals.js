import React from "react";

import { Text, Column } from ".";

export const CartPriceTotals = ({
  cartTotalBeforeShipping,
  cartTotalAfterShipping
}) => {
  return (
    <Column justifyContent="flex-start" alignItems="flex-end">
      <Text textAlign="right" width="45vw" fontSize="12px">
        {"Shipping & Handling: $5.99"}
      </Text>
      <Text
        textAlign="right"
        width="45vw"
        fontSize="12px"
      >{`Subtotal: ${cartTotalBeforeShipping}`}</Text>
      <Text textAlign="right" width="35vw" fontSize="16px">
        {`Total: ${cartTotalAfterShipping}`}
      </Text>
    </Column>
  );
};
