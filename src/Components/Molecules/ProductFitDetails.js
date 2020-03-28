import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text, Icon } from "./../Atoms/Abstracted";
import { Row } from "./../Layouts";

import widthFitIcon from "./../../Assets/width-fit-icon.png";
import sizeFitIcon from "./../../Assets/size-fit-icon.png";
import archFitIcon from "./../../Assets/arch-fit-icon.png";

const StyledProductFitDetails = styled.div`
  margin: 10px 10px 10px 10px;
  letter-spacing: 0.5px;
`;

export const ProductFitDetails = ({ details }) => {
  return (
    <StyledProductFitDetails>
      <Row>
        <Icon src={archFitIcon} width="20px" height="20px" />
        <Text
          fontSize="11px"
          fontWeight="normal"
          text={`Arch-fit: ${details.archFit.text}.`}
        />
      </Row>
      <Row>
        <Icon src={widthFitIcon} width="20px" height="20px" />
        <Text
          fontSize="11px"
          fontWeight="normal"
          text={`Width-fit: ${details.widthFit.text}.`}
        />
      </Row>
      <Row>
        <Icon src={sizeFitIcon} width="20px" height="20px" />
        <Text
          fontSize="11px"
          fontWeight="normal"
          text={`Size-fit: ${details.sizeFit.text}.`}
        />
      </Row>
    </StyledProductFitDetails>
  );
};

ProductFitDetails.propTypes = {
  details: PropTypes.object
};
