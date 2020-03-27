import React from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.div`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.backgroundColor || "black"};
  color: ${props => props.color || "white"};
  font-size: ${props => props.fontSize || "12px"};
  line-height: ${props => props.fontSize || "12px"};
  margin: ${props => props.margin || "10px 10px 10px 10px"};
  padding: ${props => props.padding || "15px 25px 15px 25px"};
  box-shadow: ${props => props.boxShadow || "none"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px #888888;
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const PrimaryButton = ({
  handleClick,
  children,
  value,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  margin,
  padding,
  boxShadow
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
      padding={padding}
      boxShadow={boxShadow}
    >
      {children || value}
    </StyledPrimaryButton>
  );
};
