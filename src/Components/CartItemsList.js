import React, { Fragment } from "react";

import { CartItem } from "./../Containers";

export const CartItemsList = ({ cartItems, shoeIdCache }) => {
  const uniqueProducts = Object.keys(cartItems);
  return (
    <Fragment>
      {uniqueProducts.map(productId => {
        const productsBySize = Object.keys(cartItems[productId]);
        return productsBySize.map(productSize => {
          const product = shoeIdCache[productId];
          const mostDetailedImage = product.details
            ? "https://www.zappos.com" + product.details.defaultImageUrl
            : product.thumbnailImageUrl;
          const productUnits = cartItems[productId][productSize];
          return (
            <CartItem
              key={productId + "/" + product.colorId + "/" + productSize}
              product={product}
              productId={productId}
              productUnits={productUnits}
              mostDetailedImage={mostDetailedImage}
              size={productSize}
            />
          );
        });
      })}
    </Fragment>
  );
};
