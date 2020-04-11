import React from "react";
import PropTypes from "prop-types";

import { Text, Icon } from "./../Atoms/Abstracted";
import { Column, Row } from "./../Layouts";

import widthFitIcon from "./../../Assets/width-fit-icon.png";
import sizeFitIcon from "./../../Assets/size-fit-icon.png";
import archFitIcon from "./../../Assets/arch-fit-icon.png";

export const ProductFitDetails = React.memo(({ details }) => {
  const { widthFit, archFit, sizeFit } = details;
  return (
    <Column margin="10px" alignItems="flex-start">
      <Row justifyContent="flex-start">
        <Icon src={archFitIcon} width="16px" height="16px" />
        <Text fontSize="12px" text={`Arch: ${archFit.text}.`} />
      </Row>
      <Row justifyContent="flex-start">
        <Icon src={widthFitIcon} width="16px" height="16px" />
        <Text fontSize="12px" text={`Width: ${widthFit.text}.`} />
      </Row>
      <Row justifyContent="flex-start">
        <Icon src={sizeFitIcon} width="16px" height="16px" />
        <Text fontSize="12px" text={`Size: ${sizeFit.text}.`} />
      </Row>
    </Column>
  );
});

ProductFitDetails.propTypes = {
  details: PropTypes.object
};
