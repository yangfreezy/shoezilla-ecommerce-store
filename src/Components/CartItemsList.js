import React, { Fragment } from "react";

import { CartItem } from ".";

export const CartItemsList = ({ cartItems, shoeIdCache }) => {
  return (
    <Fragment>
      {Object.keys(cartItems).map(productId => {
        const product = shoeIdCache[productId];
        const mostDetailedImage = product.details
          ? "https://www.zappos.com" + product.details.defaultImageUrl
          : product.thumbnailImageUrl;
        const productUnits = Object.keys(cartItems[productId]).reduce(
          (acc, size) => {
            return (acc += cartItems[productId][size]);
          },
          0
        );
        return (
          <CartItem
            key={productId + product.colorId}
            product={product}
            productId={productId}
            productUnits={productUnits}
            mostDetailedImage={mostDetailedImage}
          />
        );
      })}
    </Fragment>
  );
};
