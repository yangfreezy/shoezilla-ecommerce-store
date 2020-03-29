import React from "react";
import styled from "styled-components";

import { Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper, Column } from "./../Layouts";

const StyledBody = styled.div`
  position: relative;
  top: 5vh;
  > * div {
    max-width: 225px;
  }
  @media only screen and (min-width: 620px) {
    position: relative;
    top: 15vh;
    > * div {
      width: 500px;
      max-width: 500px;
    }
  }
`;

export const AboutDescription = () => {
  return (
    <StyledBody>
      <BoxShadowWrapper>
        <Column margin="25px 0px">
          <Text textAlign="center" fontWeight="bold" fontSize="16px">
            {"About"}
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {"Thanks for taking the time to check out the project!"}
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {
              "Shoezilla is a React.js portfolio project built and designed by Yang Yu. "
            }
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {
              "Yang is a front-end developer with full-stack experience seeking front-end based junior to mid level roles in the United States."
            }
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {"You can reach him at freezydreamin@gmail.com."}
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {"www.github.com/yangfreezy/shoezilla-ecommerce-store"}
          </Text>
          <Text
            margin="10px 0px"
            textAlign="center"
            fontSize="14px"
            fontWeight="light"
          >
            {"www.freezydreamin.com"}
          </Text>
        </Column>
      </BoxShadowWrapper>
    </StyledBody>
  );
};
