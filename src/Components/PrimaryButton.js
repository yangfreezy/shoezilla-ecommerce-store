import React from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.div`
  display: flex;
  width: ${props => props.width || "110px"};
  height: ${props => props.height || "30px"};
  background-color: ${props => props.backgroundColor || "black"};
  color: ${props => props.color || "white"};
  font-size: ${props => props.fontSize || "12px"};
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  margin: ${props => props.margin || "10px 10px 10px 10px"};
`;

export const PrimaryButton = ({
  value,
  handleClick,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  margin
}) => {
  return (
    <StyledPrimaryButton
      onClick={handleClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      margin={margin}
    >
      {value}
    </StyledPrimaryButton>
  );
};
