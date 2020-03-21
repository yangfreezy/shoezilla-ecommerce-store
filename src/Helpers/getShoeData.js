import { getMensShoes } from "./../API";
import { mapShoesToCache, insertCache } from ".";

export const getShoeData = (
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
      const idCache = mapShoesToCache(shoeData);
      setShoeIdCache(idCache);
      insertCache("shoes", shoeData);
      insertCache("shoeIdCache", idCache);
    })();
  }
};
