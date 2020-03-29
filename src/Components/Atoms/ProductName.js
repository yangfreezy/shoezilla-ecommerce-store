import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import he from "he";

const StyledName = styled.div`
  width: 175px;
  max-width: 175px;
  font-weight: ${({ fontWeight }) => fontWeight || "bolder"};
  font-size: 14px;
  text-align: center;

  @media only screen and (min-width: 620px) {
    width: ${({ width }) => width || "200px"};
    max-width: ${({ maxWidth }) => maxWidth || "200px"};
    font-weight: ${({ fontWeight }) => fontWeight || "bolder"};
    font-size: ${({ fontSize }) => fontSize || "16px"};
  }
`;

export const ProductName = ({
  name,
  textAlign,
  width,
  fontWeight,
  fontSize
}) => {
  return (
    <StyledName
      maxWidth={width}
      width={width}
      textAlign={textAlign || "center"}
      fontWeight={fontWeight || "bolder"}
      fontSize={fontSize || "16px"}
    >
      {he.decode(name)}
    </StyledName>
  );
};

ProductName.propTypes = {
  name: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string
};
