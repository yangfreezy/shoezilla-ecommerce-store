import { getMensShoes } from "./../API";
import { insertCache } from ".";

/**
 * Takes array of shoe objects and maps each object to a cache by id
 * @param {Array} data Array of shoe data objects
 * @returns {Object} Object of all data mapped by id
 **/

export const mapShoes = data => {
  return data.reduce((cache, shoe) => {
    cache[shoe.productId] = shoe;
    return cache;
  }, {});
};

/**
 * Gets all shoe data pertaining to the filters in getMensShoes
 * @param {Function} setShoes sets shoe state
 * @param {Function} setShoeIdCache sets shoeIdCache
 * @param {Number} requestAttempts Number of request attempts made, limited to prevent infinite loops
 * @param {Function} setRequestAttempts Increments request attempts
 * @returns nothing
 **/

export const getAllShoeData = (
  setShoes,
  setShoeIdCache,
  requestAttempts,
  setRequestAttempts
) => {
  if (requestAttempts < 5) {
    (async () => {
      setRequestAttempts(requestAttempts + 1);
      let shoeData = await getMensShoes();
      setShoes(shoeData);
      const idCache = mapShoes(shoeData);
      setShoeIdCache(idCache);
      insertCache("shoes", shoeData);
      insertCache("shoeIdCache", idCache);
    })();
  }
};
