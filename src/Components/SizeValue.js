import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: 30px;
`;

export const SizeValue = ({ size }) => {
  return <StyledDisplay>{size}</StyledDisplay>;
};
