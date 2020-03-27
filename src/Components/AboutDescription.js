import React from "react";
import styled from "styled-components";
import { Text, ShadowWrapper } from ".";

const StyledBody = styled.div`
  position: relative;
  top: 20vh;
`;

export const AboutDescription = () => {
  return (
    <StyledBody>
      <ShadowWrapper>
        <Text
          textAlign="center"
          width="500px"
          fontWeight="bold"
          fontSize="16px"
          margin="15px 0px"
        >
          {"About"}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"Thanks for taking the time to check out the project!"}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"Shoezilla is a portfolio project built and designed by Yang Yu."}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {
            "Yang is a front-end developer with full-stack experience seeking front-end based junior to mid level roles in the United States."
          }
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {
            "This app was built in React.js with a custom built component library. Source code available at www.github.com/yangfreezy/shoezilla-ecommerce-store."
          }
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"Portfolio: www.freezydreamin.com"}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"GitHub: www.github.com/yangfreezy"}
        </Text>
      </ShadowWrapper>
    </StyledBody>
  );
};
