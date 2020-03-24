import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Text, MainLogo } from ".";

const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 25px 25px;
  background-color: black;
  color: white;
`;

const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterColumn>
        <MainLogo margin="0px 0px 0px -8px" />
        <StyledLink to="/about">
          <Text color="white" fontSize="10px" text="About" />
        </StyledLink>
        <StyledLink to="/contact">
          <Text color="white" fontSize="10px" text="Contact" />
        </StyledLink>
        <StyledLink to="/deliveries">
          <Text color="white" fontSize="10px" text="Delivery" />
        </StyledLink>
        <StyledLink to="/returns">
          <Text color="white" fontSize="10px" text="Returns" />
        </StyledLink>
      </StyledFooterColumn>
    </StyledFooter>
  );
};
