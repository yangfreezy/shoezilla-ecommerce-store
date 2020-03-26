import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Column, Text, MainLogo } from ".";

const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 25px 25px;
  background-color: black;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Column alignItems="flex-start">
        <MainLogo width="100px" margin="0px 0px 0px -8px" />
        <StyledLink to="/about">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="About"
          />
        </StyledLink>
        <StyledLink to="/contact">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="Contact"
          />
        </StyledLink>
        <StyledLink to="/deliveries">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="Delivery"
          />
        </StyledLink>
        <StyledLink to="/returns">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="Returns"
          />
        </StyledLink>
      </Column>
    </StyledFooter>
  );
};
