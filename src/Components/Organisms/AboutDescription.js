import React from "react";
import styled from "styled-components";

import { Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper } from "./../Layouts";

const StyledBody = styled.div`
  position: relative;
  top: 15vh;
`;

export const AboutDescription = () => {
  return (
    <StyledBody>
      <BoxShadowWrapper>
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
          {
            "Shoezilla is a React.js portfolio project built and designed by Yang Yu. "
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
          {"You can reach him at freezydreamin@gmail.com."}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"www.github.com/yangfreezy/shoezilla-ecommerce-store"}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"www.freezydreamin.com"}
        </Text>
      </BoxShadowWrapper>
    </StyledBody>
  );
};
