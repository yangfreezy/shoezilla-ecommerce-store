import { insertCache } from ".";
import { deepCopy } from ".";

/**
 * Adds data from product details GET request to the cache of shoe data
 * @param {String} id Product ID
 * @param {Object} details Product details
 * @param {Object} shoeIdCache Cache of shoe data to add details to
 * @param {Function} setShoeIdCache Sets the shoeIdCache to a new updated cache
 * @returns nothing
 **/

export const addShoeDetailsToCache = (
  id,
  details,
  shoeIdCache,
  setShoeIdCache
) => {
  const updatedCache = deepCopy(shoeIdCache);
  updatedCache[id]["details"] = details;
  setShoeIdCache(updatedCache);
  insertCache("shoeIdCache", updatedCache);
};
