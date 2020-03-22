import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuantityDisplay = ({ quantity }) => {
  return <StyledDisplay>{quantity}</StyledDisplay>;
};
