import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  ${props => (props.alignItems ? "align-items: " + props.alignItems : null)};
  ${props => (props.textAlign ? "text-align: " + props.textAlign : null)};
  ${props =>
    props.margin ? "margin: " + props.margin : "margin: 10px 10px 10px 10px"};
  ${props => (props.width ? "width: " + props.width : null)};
  ${props => (props.fontSize ? "font-size: " + props.fontSize : null)};
  ${props =>
    props.fontWeight ? "font-weight: " + props.fontWeight : "normal"};
  ${props => (props.color ? "color: " + props.color : null)};
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
