import React from "react";
import styled from "styled-components";
import { Text } from "./Abstracted";

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 175px;
  word-wrap: break-word;
  top: 5vh;
  @media only screen and (min-width: 340px) {
    max-width: 475px;
    top: 12vh;
  }

  @media only screen and (min-width: 620px) {
    max-width: 500px;
    top: 20vh;
  }
  @media only screen and (min-width: 760px) {
    max-width: 500px;
    top: 20vh;
    > * {
      font-size: 28px;
    }
  }
`;

export const EmptyCartMessage = () => {
  return (
    <StyledMessage>
      <Text
        textAlign="center"
        fontSize="16px"
        text="Your shopping cart is empty!"
      />
    </StyledMessage>
  );
};
