import React from "react";
import PropTypes from "prop-types";

import { CartItem } from ".";
import { Column } from "./../Layouts";

export const CartItemsList = ({
  cartItems,
  shoeIdCache,
  removeFromCart,
  editQuantity
}) => {
  return (
    <Column margin="25px 0px">
      {Object.keys(cartItems).map(cartId => {
        const [productId, productSize] = cartId.split("/");
        const product = shoeIdCache[productId];
        const productUnits = cartItems[cartId];
        const mostDetailedImage = product.details
          ? "https://www.zappos.com" + product.details.defaultImageUrl
          : product.thumbnailImageUrl;
        return (
          <Column key={cartId} alignItems="flex-end" margin="0px 0px 20px 0px">
            <CartItem
              cartId={cartId}
              product={product}
              productId={productId}
              productUnits={productUnits}
              mostDetailedImage={mostDetailedImage}
              productSize={productSize}
              removeFromCart={removeFromCart}
              editQuantity={editQuantity}
            />
          </Column>
        );
      })}
    </Column>
  );
};

CartItemsList.propTypes = {
  cartItems: PropTypes.object,
  shoeIdCache: PropTypes.object,
  removeFromCart: PropTypes.func,
  editQuantity: PropTypes.func
};
