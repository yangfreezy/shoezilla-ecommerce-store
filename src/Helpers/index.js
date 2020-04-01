import { getCache, insertCache } from "./cache";
import {
  generateCartId,
  getTotalPriceOfCart,
  addToCart,
  editCartQuantity,
  removeFromCart
} from "./cart";
import { getAndMapShoeData } from "./getAndMapShoeData";
import { deepCopy } from "./objects";
import { priceWithTax } from "./priceWithTax";
import { incrementSize } from "./product";
import { removeLiTagsWithLinks } from "./removeLiTagsWithLinks";

export {
  getCache,
  deepCopy,
  generateCartId,
  addToCart,
  getTotalPriceOfCart,
  editCartQuantity,
  removeFromCart,
  insertCache,
  getAndMapShoeData,
  priceWithTax,
  incrementSize,
  removeLiTagsWithLinks
};
