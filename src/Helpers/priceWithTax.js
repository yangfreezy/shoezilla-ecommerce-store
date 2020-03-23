/**
 *
 * @param {Number} price String of price with first element being a currency symbol
 * @param {Number} taxRate tax rate to be applied to price
 * @returns {Object} totalPrice (ie total price including tax) and taxCost
 **/

export const priceWithTax = (price, taxRate = 0.065) => {
  const parsedPrice = parseInt(price.slice(1)) * taxRate;
  const tax = parsedPrice * taxRate;
  const totalUnrounded = parsedPrice + tax;
  const totalPrice = (Math.round(totalUnrounded * 100) / 100).toFixed(2);
  const taxCost = (Math.round(tax * 100) / 100).toFixed(2);
  return { total: totalPrice, taxCost: taxCost };
};
