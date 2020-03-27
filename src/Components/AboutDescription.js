import React from "react";
import styled from "styled-components";
import { Text, ShadowWrapper } from ".";

const StyledBody = styled.div`
  position: relative;
  top: 25vh;
`;

export const AboutDescription = () => {
  return (
    <StyledBody>
      <ShadowWrapper>
        <Text
          textAlign="center"
          width="325px"
          fontWeight="bold"
          fontSize="16px"
        >
          {"Shoezilla"}
        </Text>
        <Text
          margin="10px 0px"
          textAlign="center"
          width="325px"
          fontSize="14px"
          fontWeight="light"
        >
          {
            "Shoezilla is a portfolio project e-commerce store built by Yang Yu in React.js with the Zappos API."
          }
        </Text>
        <Text
          margin="10px 0px"
          textAlign="center"
          width="325px"
          fontSize="14px"
          fontWeight="light"
        >
          {"Thanks for taking the time to check out the project!"}
        </Text>
      </ShadowWrapper>
    </StyledBody>
  );
};
