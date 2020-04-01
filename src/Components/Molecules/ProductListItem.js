import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ProductName, ProductBrandName, ProductThumbnail } from "./../Atoms";
import { LinkWrapper, Text } from "./../Atoms/Abstracted";
import { HoverWrapper } from "./../Layouts";

const StyledProductListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0px;
  > * {
    margin: 10px 0px;
  }

  @media only screen and (min-width: 375px) {
    margin: 25px 25px;
  }

  @media only screen and (min-width: 620px) {
    margin: 50px 50px;
    > * {
      margin: 15px 0px;
    }
  }
`;

export const ProductListItem = ({ product }) => {
  return (
    <HoverWrapper>
      <LinkWrapper to={`/product/${product.productId}`}>
        <StyledProductListItem>
          <ProductName
            name={product.productName}
            productId={product.productId}
            fontWeight="600"
            width="250px"
          />
          <ProductBrandName brandName={product.brandName} />
          <ProductThumbnail
            src={product.thumbnailImageUrl}
            alt={product.productName}
            id={product.productId}
          />
          <Text>{product.price} </Text>
          {product.isNew && (
            <Text fontSize="10px" margin="10px 10px" text="New" />
          )}
        </StyledProductListItem>
      </LinkWrapper>
    </HoverWrapper>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object
};
