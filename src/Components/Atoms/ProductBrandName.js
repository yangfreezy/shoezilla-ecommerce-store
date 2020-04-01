import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import he from "he";

const StyledName = styled.div`
  font-style: italic;
  font-weight: light;
  margin: 10px 0px 10px 0px;
  font-size: ${({ fontSize }) => fontSize || "10px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;
export const ProductBrandName = ({ brandName, fontSize, textAlign }) => {
  return (
    <StyledName fontSize={fontSize} textAlign={textAlign}>
      {he.decode(brandName)}
    </StyledName>
  );
};

ProductBrandName.propTypes = {
  brandName: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string
};
