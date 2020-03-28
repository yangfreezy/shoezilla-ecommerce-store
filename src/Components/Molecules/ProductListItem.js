import React from "react";
import PropTypes from "prop-types";

import { ProductName, ProductBrandName, ProductThumbnail } from "./../Atoms";
import { LinkWrapper, Text } from "./../Atoms/Abstracted";
import { Column, HoverWrapper } from "./../Layouts";

export const ProductListItem = ({ product }) => {
  return (
    <HoverWrapper>
      <LinkWrapper to={`/product/${product.productId}`}>
        <Column margin="50px 50px 50px 50px">
          <ProductName
            name={product.productName}
            productId={product.productId}
            fontWeight="600"
            width="250px"
          />
          <ProductBrandName fontSize="10px" brandName={product.brandName} />
          <ProductThumbnail
            src={product.thumbnailImageUrl}
            alt={product.productName}
            id={product.productId}
          />
          <Text>{product.price} </Text>
          {product.isNew && (
            <Text
              fontSize="10px"
              textAlign="center"
              margin="10px 10px 10px 10px"
              text="New"
            />
          )}
        </Column>
      </LinkWrapper>
    </HoverWrapper>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object
};
