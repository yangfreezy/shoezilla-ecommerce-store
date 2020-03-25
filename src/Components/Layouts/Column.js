import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  margin: ${props => props.margin || "0"};
`;

export const Column = ({ children, margin, alignItems, justifyContent }) => {
  return (
    <StyledColumn
      margin={margin}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StyledColumn>
  );
};
