import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
  font-family: Lato;
  font-size: 20px;
  text-align: center;
  font-weight: 900;
  margin: 10px 10px 10px 10px;
  color: black;
  max-width: 200px;
`;
export const ProductListName = ({ name }) => {
  return <StyledName> {name} </StyledName>;
};
