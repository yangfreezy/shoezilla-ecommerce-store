/**
 * Makes a cart id for a product
 * @param {String} productId id of product from Zappos
 * @param {String} size size of product (will add colorId as well later)
 * @returns {string} cartId
 **/

export const generateCartId = (productId, size) => {
  return productId + "/" + size;
};
