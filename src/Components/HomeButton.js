import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import shoeIcon from "./../Assets/shoe-icon.png";

const StyledIcon = styled.img.attrs({
  src: shoeIcon
})`
  width: 24px;
  height: 24px;
`;
const StickyWrapper = styled.div`
  position: fixed;
  top: 25px;
`;

export const HomeButton = () => (
  <Link to="/">
    <StickyWrapper>
      <StyledIcon />
    </StickyWrapper>
  </Link>
);
