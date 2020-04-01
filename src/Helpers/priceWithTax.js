/**
 * Calculates adds tax to initial price, and includes the cost of tax.
 * @param {String} price String of price: Looks like "$10.00"
 * @param {Number} taxRate tax rate to be applied to price
 * @param {Number} units number of items
 * @returns {Object} totalPrice and taxCost
 **/

export const priceWithTax = (price, taxRate = 0.065, units = 1) => {
  const parsedPrice = parseInt(price.slice(1)) * units;
  const tax = parsedPrice * taxRate;
  const totalUnrounded = parsedPrice + tax;
  const totalPrice = (Math.round(totalUnrounded * 100) / 100).toFixed(2);
  const taxCost = (Math.round(tax * 100) / 100).toFixed(2);
  return { totalCost: "$" + totalPrice, taxCost: "$" + taxCost };
};
