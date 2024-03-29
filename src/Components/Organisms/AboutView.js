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

export const AboutView = React.memo(() => {
  const page = "About";
  const pageSentences = [
    "Thanks for taking the time to check out the project!",
    "Shoezilla is a React.js portfolio project built and designed by Yang Yu.",
    "Yang is a front-end developer with full-stack experience seeking front-end based mid level roles in the United States.",
    "You can reach him at yangthedev@gmail.com",
    "www.github.com/yangfreezy/shoezilla-ecommerce-store",
    "www.yangthedev.com"
  ];
  return (
    <StyledBody>
      <BoxShadowWrapper>
        <Column margin="25px 0px">
          <Text fontWeight="bold" fontSize="16px">
            {page}
          </Text>
          {pageSentences.map(sentence => {
            return <Text fontWeight="light">{sentence}</Text>;
          })}
        </Column>
      </BoxShadowWrapper>
    </StyledBody>
  );
});
