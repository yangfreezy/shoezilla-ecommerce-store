import { getMensShoes } from "./../API";

/**
 * Takes array of objects and maps each object to a cache by id
 * @param {Array} data Array of data objects
 * @returns {Object} Object of all data mapped by id
 **/

const mapProductListToCache = data => {
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

export const getAndMapShoeData = async () => {
  const shoeData = await getMensShoes();
  if (!shoeData) return;
  const idCache = mapProductListToCache(shoeData);
  return { rawDataList: shoeData, mappedIdCache: idCache };
};
