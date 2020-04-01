import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import { StoreContext } from "./Context";
import { insertCache, getCache, getAndMapShoeData } from "./Helpers";
import {
  About,
  Cart,
  Contact,
  Home,
  NotFound,
  Product,
  Purchase,
  PurchaseComplete
} from "./Pages";

export const App = () => {
  const [shoesList, setShoesList] = useState(getCache("shoes") || []);
  const [shoeIdCache, setShoeIdCache] = useState(getCache("shoeIdCache") || {});
  const [cart, setCart] = useState(
    getCache("cart") || { numOfItems: 0, itemsCache: {} }
  );
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  useEffect(() => {
    if (!shoesList.length) {
      const loadData = async () => {
        const { rawDataList, mappedIdCache } = await getAndMapShoeData();
        setShoesList(rawDataList);
        setShoeIdCache(mappedIdCache);
        insertCache("shoes", rawDataList);
        insertCache("shoeIdCache", mappedIdCache);
      };
      loadData();
    }
  }, [shoesList.length]);

  return (
    <StoreContext.Provider
      value={{
        shoesList,
        setShoesList,
        shoeIdCache,
        setShoeIdCache,
        cart,
        setCart,
        numItemsInCart,
        setNumItemsInCart
      }}
    >
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/purchase" exact component={Purchase} />
            <Route
              path="/purchase-complete"
              exact
              component={PurchaseComplete}
            />
            <Route path="/product/:productId" exact component={Product} />
            <Route path="/:404" exact component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </StoreContext.Provider>
  );
};
