export const priceWithTax = (price, taxRate = 0.065) => {
  const parsedPrice = parseInt(price.slice(1)) * taxRate;
  const roundedPrice = (Math.round(parsedPrice * 100) / 100).toFixed(2);
  const withCurrencyPrice = String(roundedPrice);
  return withCurrencyPrice;
};
