import React from "react";
import styled from "styled-components";

import { Text } from "./../Atoms/Abstracted";
import { BoxShadowWrapper } from "./../Layouts";

const StyledBody = styled.div`
  position: relative;
  top: 15vh;
`;

export const ContactDescription = () => {
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
      </BoxShadowWrapper>
    </StyledBody>
  );
};
