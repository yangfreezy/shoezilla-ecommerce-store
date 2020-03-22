import { insertCache } from ".";

export const addShoeDetailsToCache = (
  id,
  details,
  shoeIdCache,
  setShoeIdCache
) => {
  const updatedCache = JSON.parse(JSON.stringify(shoeIdCache));
  updatedCache[id]["details"] = details;
  setShoeIdCache(updatedCache);
  insertCache("shoeIdCache", updatedCache);
};
