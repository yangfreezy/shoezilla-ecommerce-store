import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "./../Atoms/Abstracted";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > * {
    text-align: center;
    margin: 5px 5px;
  }
`;

export const CartPriceDetails = ({
  initialPrice,
  taxCost,
  totalPrice,
  productUnits
}) => {
  return (
    <StyledDetails>
      <Text fontSize="12px" text={productUnits + " x " + initialPrice} />
      <Text text={"Tax: " + taxCost} fontSize="10px" />
      <Text text={"Total: " + totalPrice} fontSize="10px" />
    </StyledDetails>
  );
};

CartPriceDetails.propTypes = {
  initialPrice: PropTypes.string,
  taxCost: PropTypes.string,
  totalPrice: PropTypes.string,
  productUnits: PropTypes.number
};
