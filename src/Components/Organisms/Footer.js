import React from "react";
import styled from "styled-components";

import { MainLogo } from "./../Atoms";
import { LinkWrapper, Text } from "./../Atoms/Abstracted";
import { Column } from "./../Layouts";

const StyledFooter = styled.div`
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 25px 25px;
  background-color: black;
  color: white;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Column alignItems="flex-start">
        <MainLogo width="100px" margin="0px 0px 10px -8px" />
        <LinkWrapper to="/about">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="About"
          />
        </LinkWrapper>
        <LinkWrapper to="/contact">
          <Text
            color="white"
            fontSize="10px"
            margin="5px 10px 5px 10px"
            fontWeight="bold"
            text="Contact"
          />
        </LinkWrapper>
      </Column>
    </StyledFooter>
  );
};
