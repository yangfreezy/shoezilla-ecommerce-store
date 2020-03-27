import React from "react";
import styled from "styled-components";
import { Text, ShadowWrapper } from ".";

const StyledBody = styled.div`
  position: relative;
  top: 15vh;
`;

export const ContactDescription = () => {
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
          {"Contact"}
        </Text>
        <Text
          margin="15px 0px"
          textAlign="center"
          width="500px"
          fontSize="14px"
          fontWeight="light"
        >
          {"You can reach Yang at freezydreamin@gmail.com!"}
        </Text>
      </ShadowWrapper>
    </StyledBody>
  );
};
