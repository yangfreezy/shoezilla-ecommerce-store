import { addShoeDetailsToCache } from "./addShoeDetailsToCache";
import { getCache, insertCache } from "./cache";
import { generateCartId } from "./cart";
import { mapProductListToCache, getAllShoeData } from "./getAllShoeData";
import { deepCopy } from "./objects";
import { priceWithTax } from "./priceWithTax";
import { removeLiTagsWithLinks } from "./removeLiTagsWithLinks";

export {
  addShoeDetailsToCache,
  getCache,
  deepCopy,
  generateCartId,
  insertCache,
  mapProductListToCache,
  getAllShoeData,
  priceWithTax,
  removeLiTagsWithLinks
};
