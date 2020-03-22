import React from "react";
import styled from "styled-components";

const StyledNote = styled.div`
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "normal"};
  text-align: center;
  margin: 10px 10px 0px 10px;
`;
export const ProductListItemNote = ({ note, fontSize, fontWeight }) => {
  return (
    <StyledNote fontSize={fontSize} fontWeight={fontWeight}>
      {note}
    </StyledNote>
  );
};
