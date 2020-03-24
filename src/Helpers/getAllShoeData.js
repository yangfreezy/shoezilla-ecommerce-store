import { getMensShoes } from "./../API";
import { insertCache } from ".";

/**
 * Takes array of objects and maps each object to a cache by id
 * @param {Array} data Array of data objects
 * @returns {Object} Object of all data mapped by id
 **/

export const mapProductListToCache = data => {
  return data.reduce((cache, product) => {
    cache[product.productId] = product;
    return cache;
  }, {});
};

/**
 * Gets all shoe data pertaining to the filters in getMensShoes
 * @param {Function} setShoesList sets shoe state
 * @param {Function} setShoeIdCache sets shoeIdCache
 * @returns nothing
 **/

export const getAllShoeData = async (setShoesList, setShoeIdCache) => {
  let shoeData = await getMensShoes();
  if (!shoeData) return;
  const idCache = mapProductListToCache(shoeData);
  setShoesList(shoeData);
  setShoeIdCache(idCache);
  insertCache("shoes", shoeData);
  insertCache("shoeIdCache", idCache);
  return idCache;
};
