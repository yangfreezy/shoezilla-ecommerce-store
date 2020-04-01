import { getCache, insertIntoCache } from "./cache";
import {
  createCartId,
  getTotalPriceOfCart,
  createCartItem,
  editCartQuantity,
  removeFromCart
} from "./cart";
import { getAndMapShoeData } from "./getAndMapShoeData";
import { deepCopyObj } from "./deepCopyObj";
import { getPriceWithTax } from "./getPriceWithTax";
import { incrementProductSize } from "./incrementProductSize";
import { removeLiTagsWithLinks } from "./removeLiTagsWithLinks";

export {
  getCache,
  deepCopyObj,
  createCartId,
  createCartItem,
  getTotalPriceOfCart,
  editCartQuantity,
  removeFromCart,
  insertIntoCache,
  getAndMapShoeData,
  getPriceWithTax,
  incrementProductSize,
  removeLiTagsWithLinks
};
