import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledName = styled.div`
  font-style: italic;
  font-size: ${props => props.fontSize || "12px"};
  text-align: ${props => props.textAlign || "center"};
  font-weight: light;
  margin: 10px 0px 10px 0px;
`;
export const ProductBrandName = ({ brandName, fontSize, textAlign }) => {
  return (
    <StyledName fontSize={fontSize} textAlign={textAlign}>
      {brandName}
    </StyledName>
  );
};

ProductBrandName.propTypes = {
  brandName: PropTypes.string,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string
};
