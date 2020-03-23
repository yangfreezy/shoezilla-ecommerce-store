import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Text, MainLogo } from ".";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const FooterColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  img {
    position: relative;
    margin-left: -10px;
    position: relative;
    top: -5px;
  }
  div {
    position: relative;
    top: -10px;
  }
`;

const StyledFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  background-color: black;
  color: white;
  width: 100;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterColumnLeft>
        <MainLogo />
        <StyledLink to="/about">
          <Text fontSize="10px" text="About Us" />
        </StyledLink>
        <StyledLink to="/contact">
          <Text fontSize="10px" text="Contact Us" />
        </StyledLink>
        <StyledLink to="/deliveries">
          <Text fontSize="10px" text="Delivery" />
        </StyledLink>
        <StyledLink to="/returns">
          <Text fontSize="10px" text="Returns" />
        </StyledLink>
      </FooterColumnLeft>
    </StyledFooter>
  );
};
