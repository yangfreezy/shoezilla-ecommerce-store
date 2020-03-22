import React from "react";
import styled from "styled-components";

const StyledNote = styled.div`
  font-size: 10px;
  text-align: center;
  margin: 10px 10px 0px 10px;
  font-weight: bold;
`;
export const ProductListItemNote = ({ note }) => {
  return <StyledNote> {note} </StyledNote>;
};
