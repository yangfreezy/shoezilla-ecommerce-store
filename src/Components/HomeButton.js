import React from "react";

import styled from "styled-components";

import shoeIcon from "./../Assets/shoe-icon.png";

const Icon = styled.img.attrs({
  src: shoeIcon
})`
  width: 24px;
  height: 24px;
`;
export const HomeButton = () => <Icon />;
