import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import {
  Cart,
  Home,
  NotFound,
  Product,
  Purchase,
  PurchaseComplete,
  PurchaseConfirmation
} from "./Pages";

import { StoreContext } from "./Context";
import { getCache, getAllShoeData } from "./Helpers";

export const App = () => {
  const [shoesList, setShoesList] = useState(getCache("shoes") || []);
  const [shoeIdCache, setShoeIdCache] = useState(getCache("shoeIdCache") || {});
  const [cart, setCart] = useState(
    getCache("cart") || { numOfItems: 0, itemsCache: {} }
  );

  useEffect(() => {
    if (!shoesList.length) {
      (async () => {
        await getAllShoeData(setShoesList, setShoeIdCache);
      })();
    }
  }, [shoesList]);

  return (
    <StoreContext.Provider
      value={{
        shoesList,
        setShoesList,
        shoeIdCache,
        setShoeIdCache,
        cart,
        setCart
      }}
    >
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/purchase" exact component={Purchase} />
            <Route
              path="/purchase-confirmation"
              exact
              component={PurchaseConfirmation}
            />
            <Route
              path="/purchase-complete"
              exact
              component={PurchaseComplete}
            />
            <Route path="/:404" exact component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </StoreContext.Provider>
  );
};
