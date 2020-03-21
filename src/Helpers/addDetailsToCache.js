export const addShoeDetailsToCache = (
  id,
  details,
  shoeIdCache,
  setShoeIdCache,
  setShoeDetails
) => {
  shoeIdCache[id]["details"] = details;
  setShoeIdCache(shoeIdCache);
  setShoeDetails(true);
};
