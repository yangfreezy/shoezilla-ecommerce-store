import React from "react";
import PropTypes from "prop-types";

import { Text, Icon } from "./../Atoms/Abstracted";
import { Column, Row } from "./../Layouts";

import widthFitIcon from "./../../Assets/width-fit-icon.png";
import sizeFitIcon from "./../../Assets/size-fit-icon.png";
import archFitIcon from "./../../Assets/arch-fit-icon.png";

export const ProductFitDetails = ({ details }) => {
  return (
    <Column margin="10px">
      <Row>
        <Icon src={archFitIcon} width="16px" height="16px" />
        <Text
          fontSize="12px"
          fontWeight="normal"
          text={`Arch: ${details.archFit.text}.`}
        />
      </Row>
      <Row>
        <Icon src={widthFitIcon} width="16px" height="16px" />
        <Text
          fontSize="12px"
          fontWeight="normal"
          text={`Width: ${details.widthFit.text}.`}
        />
      </Row>
      <Row>
        <Icon src={sizeFitIcon} width="16px" height="16px" />
        <Text
          fontSize="12px"
          fontWeight="normal"
          text={`Size: ${details.sizeFit.text}.`}
        />
      </Row>
    </Column>
  );
};

ProductFitDetails.propTypes = {
  details: PropTypes.object
};
