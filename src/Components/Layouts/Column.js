import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  max-width: ${props => props.maxWidth || "100%"};
`;

export const Column = ({
  children,
  margin,
  padding,
  alignItems,
  justifyContent,
  maxWidth
}) => {
  return (
    <StyledColumn
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
      maxWidth={maxWidth}
    >
      {children}
    </StyledColumn>
  );
};
