import { deepCopy, insertCache, priceWithTax } from ".";

/**
 * Makes a cart id for a product
 * @param {String} productId id of product from Zappos
 * @param {String} size size of product (will add colorId as well later)
 * @returns {string} cartId
 **/

export const generateCartId = (productId, size) => {
  return productId + "/" + size;
};

/**
 * Sums up the total price of the cart and accounts for shipping.
 * @param {Object} cartItems cart item objects, key of their productId/colorId, value of their quantity in the cart
 * @param {Object} shoeIdCache master object of shoes, key of productId, value of their zappos api data
 * @returns {Object}
 * - beforeShipping String
 * - afterShipping String
 * - numOfItemsInCart Number
 **/

export const getTotalPriceOfCart = (cartItems, shoeIdCache) => {
  let totalBeforeShipping = 0;
  let numOfItemsInCart = 0;
  for (var cartId in cartItems) {
    const [productId] = cartId.split("/");
    const numberOfUnits = cartItems[cartId];
    const taxRate = 0.065;
    const { totalCost } = priceWithTax(
      shoeIdCache[productId].price,
      taxRate,
      numberOfUnits
    );
    const costAfterTax = parseInt(totalCost.slice(1));
    totalBeforeShipping += costAfterTax;
    numOfItemsInCart += numberOfUnits;
  }
  const totalAftershipping = totalBeforeShipping + 5.99;
  return {
    beforeShipping: "$" + totalBeforeShipping.toFixed(2),
    afterShipping: "$" + totalAftershipping.toFixed(2),
    numOfItemsInCart: numOfItemsInCart
  };
};

/**
 * Handles changes in product quantity from the cart
 * @param {Object} cart cart state: example: { itemsCache: { 'productId/size' : 0}, numOfItems: 0 }
 * @param {String} productId string of productId from Zappos
 * @param {Number} size product size
 * @param {Function} setCart sets cart state
 * @returns undefined
 **/

export const addToCart = (cart, productId, size, setCart) => {
  const newCart = deepCopy(cart);
  const cartItems = newCart.itemsCache;
  const cartId = generateCartId(productId, size);
  if (!cartItems[cartId]) cartItems[cartId] = {};
  if (~~cartItems[cartId] < 10) {
    cartItems[cartId] = ~~cartItems[cartId] + 1;
    newCart["numOfItems"]++;
    insertCache("cart", newCart);
    setCart(newCart);
  }
  return;
};

/**
 * Handles changes in product quantity from the cart
 * @param {Object}  event synthetic react event
 * @param {String} cartId string of productId/size
 * @param {Object} cart cart state: example: { itemsCache: { 'productId/size' : 0}, numOfItems: 0 }
 * @param {Function} setCart sets cart state
 * @param {Function} setNumItemsInCart sets the number of items in the cart for other components to update
 * @returns undefined
 **/

export const editCartQuantity = (
  event,
  cartId,
  cart,
  setCart,
  setNumItemsInCart
) => {
  const theCart = deepCopy(cart);
  const newQuantity = event.target.value;
  const changeInNumOfItems = newQuantity - theCart.itemsCache[cartId];
  theCart.itemsCache[cartId] = +newQuantity;
  if (theCart.itemsCache[cartId] === 0) delete theCart.itemsCache[cartId];
  theCart.numOfItems += changeInNumOfItems;
  setCart(theCart);
  insertCache("cart", theCart);
  setNumItemsInCart(theCart.numOfItems);
  return;
};

/**
 * Removes an individual product entirely from the cart
 * @param {String} cartId string of productId/size
 * @param {Object} cart cart state: example: { itemsCache: { 'productId/size' : 0}, numOfItems: 0 }
 * @param {Function} setCart sets cart state
 * @param {Function} setNumItemsInCart sets the number of items in the cart for other components to update
 * @returns undefined
 **/

export const removeFromCart = (cartId, cart, setCart, setNumItemsInCart) => {
  const updatedCart = deepCopy(cart);
  const numberOfItemsRemoved = updatedCart.itemsCache[cartId];
  delete updatedCart.itemsCache[cartId];
  updatedCart.numOfItems -= numberOfItemsRemoved;
  setCart(updatedCart);
  insertCache("cart", updatedCart);
  setNumItemsInCart(updatedCart.numOfItems);
  return;
};
