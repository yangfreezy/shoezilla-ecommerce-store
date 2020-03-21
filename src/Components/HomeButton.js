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

export const HomeButton = () => (
  <Link to="/">
    <StyledIcon />
  </Link>
);
