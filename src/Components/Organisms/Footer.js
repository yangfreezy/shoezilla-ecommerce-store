import React from "react";

import { MainLogo } from "./../Atoms";
import { LinkWrapper, Text } from "./../Atoms/Abstracted";
import { Column, FooterLayout } from "./../Layouts";

export const Footer = () => {
  return (
    <FooterLayout>
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
    </FooterLayout>
  );
};
