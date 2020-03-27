import React from "react";
import styled from "styled-components";

import { ProductName, ProductBrandName, ProductItemImage } from ".";

const StyledContainer = styled.div`
  > * {
    margin: 10px 0px 10px 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
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
