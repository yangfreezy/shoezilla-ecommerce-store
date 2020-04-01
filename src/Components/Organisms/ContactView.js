import React from "react";
import styled from "styled-components";

import { Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper, Column } from "./../Layouts";

const StyledBody = styled.div`
  position: relative;
  top: 5vh;
  > * div {
    max-width: 175px;
  }

  @media only screen and (min-width: 340px) {
    > * div {
      max-width: 225px;
    }
  }

  @media only screen and (min-width: 620px) {
    position: relative;
    top: 7.5vh;
    > * div {
      width: 500px;
      max-width: 500px;
    }
  }
`;

export const ContactView = () => {
  const myEmail = "freezydreamin@gmail.com";
  const page = "Contact";
  return (
    <StyledBody>
      <BoxShadowWrapper>
        <Column margin="25px 0px">
          <Text
            width="500px"
            fontWeight="bold"
            fontSize="16px"
            margin="15px 0px"
          >
            {page}
          </Text>
          <Text margin="15px 0px" width="500px" fontWeight="light">
            {myEmail}
          </Text>
        </Column>
      </BoxShadowWrapper>
    </StyledBody>
  );
};
