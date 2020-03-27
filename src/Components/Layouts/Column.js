import React from "react";
import PropTypes from "prop-types";
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
  alignItems,
  children,
  justifyContent,
  margin,
  padding,
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

Column.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string
};
