import React from "react";
import PropTypes from "prop-types";

import { Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

export const QuantitySelection = ({ defaultValue, editCartQuantity }) => {
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Column margin="10px 0px">
      <Text text="Quantity" textAlign="center" fontSize="8px" />
      <select
        id="Quantity"
        onChange={editCartQuantity}
        defaultValue={defaultValue}
      >
        {options.map(option => (
          <option key={option} value={String(option)}>
            {option}
          </option>
        ))}
      </select>
    </Column>
  );
};

QuantitySelection.propTypes = {
  defaultValue: PropTypes.number,
  editCartQuantity: PropTypes.func
};
