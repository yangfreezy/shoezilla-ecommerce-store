import React from "react";

import { MainLogo } from "./../Atoms";
import { LinkWrapper, Text } from "./../Atoms/Abstracted";
import { Column, FooterLayout } from "./../Layouts";

export const Footer = () => {
  const links = [
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" }
  ];
  return (
    <FooterLayout>
      <Column alignItems="flex-start">
        <MainLogo width="100px" margin="0px 0px 10px -8px" />
        {links.map(({ path, name }) => (
          <LinkWrapper key={path} to={path}>
            <Text
              color="white"
              fontSize="10px"
              margin="5px 10px"
              fontWeight="bold"
              text={name}
            />
          </LinkWrapper>
        ))}
      </Column>
    </FooterLayout>
  );
};
