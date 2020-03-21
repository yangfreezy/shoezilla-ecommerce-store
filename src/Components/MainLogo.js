import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import mainLogo from "./../Assets/main-logo.png";

const Icon = styled.img.attrs({
  src: mainLogo
})`
  width: 100px;
  height: auto;
`;
export const MainLogo = () => (
  <Link to="/">
    <Icon />
  </Link>
);
