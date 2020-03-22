import React from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
`;
export const Icon = ({ src, width, height }) => {
  return <StyledIcon src={src} width={width} height={height} />;
};
