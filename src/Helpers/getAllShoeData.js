import { getMensShoes } from "./../API";
import { insertCache } from ".";

export const mapShoes = data => {
  return data.reduce((cache, shoe) => {
    cache[shoe.productId] = shoe;
    return cache;
  }, {});
};

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
