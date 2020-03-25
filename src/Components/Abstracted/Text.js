import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  align-items: ${props => props.alignItems || "center"};
  text-align: ${props => props.textAlign || "left"};
  margin: ${props => props.margin || "10px 0px 10px 0px"};
  width: ${props => props.width || "auto"};
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: ${props => props.fontSize || "normal"}
  color: ${props => props.color || "black"};
`;

export const Text = ({
  text,
  alignItems,
  textAlign,
  margin,
  width,
  fontSize,
  fontWeight,
  color
}) => {
  return (
    <StyledText
      alignItems={alignItems}
      textAlign={textAlign}
      margin={margin}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {text}
    </StyledText>
  );
};
