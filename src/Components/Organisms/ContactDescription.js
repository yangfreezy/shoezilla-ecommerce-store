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
export const ContactDescription = () => {
  return (
    <StyledBody>
      <BoxShadowWrapper>
        <Column margin="25px 0px">
          <Text
            textAlign="center"
            width="500px"
            fontWeight="bold"
            fontSize="16px"
            margin="15px 0px"
          >
            {"Contact"}
          </Text>
          <Text
            margin="15px 0px"
            textAlign="center"
            width="500px"
            fontSize="14px"
            fontWeight="light"
          >
            {"freezydreamin@gmail.com"}
          </Text>
        </Column>
      </BoxShadowWrapper>
    </StyledBody>
  );
};
