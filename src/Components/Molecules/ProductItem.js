import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ProductName, ProductBrandName, ProductItemImage } from "./../Atoms";

const StyledContainer = styled.div`
  > * {
    margin: 5x 0px 5px 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 620px) {
    > * {
      margin: 10px 0px 10px 0px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductItem = ({ product, productId }) => {
  return (
    <StyledContainer>
      <ProductName
        fontSize="20px"
        name={product.productName}
        productId={productId}
      />
      <ProductBrandName fontSize="10px" brandName={product.brandName} />
      <ProductItemImage
        src={product.thumbnailImageUrl}
        alt={product.productName}
      />
    </StyledContainer>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  productId: PropTypes.string
};
