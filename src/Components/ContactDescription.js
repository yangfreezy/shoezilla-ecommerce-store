import React from "react";
import styled from "styled-components";
import { Text, ShadowWrapper } from ".";

const StyledBody = styled.div`
  position: relative;
  top: 25vh;
`;

export const ContactDescription = () => {
  return (
    <StyledBody>
      <ShadowWrapper>
        <Text
          textAlign="center"
          width="325px"
          fontWeight="bold"
          fontSize="16px"
        >
          {"Contact"}
        </Text>
        <Text
          margin="10px 0px"
          textAlign="center"
          width="325px"
          fontSize="14px"
          fontWeight="light"
        >
          {"You can e-mail Yang, the developer at freezydreamin@gmail.com."}
        </Text>
      </ShadowWrapper>
    </StyledBody>
  );
};
