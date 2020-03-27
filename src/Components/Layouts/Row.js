import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  flex-wrap: wrap;
`;

export const Row = ({
  children,
  margin,
  padding,
  alignItems,
  justifyContent,
  width,
  height
}) => {
  return (
    <StyledRow
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      width={width}
      justifyContent={justifyContent}
    >
      {children}
    </StyledRow>
  );
};

Row.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  justifyContent: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string
};
