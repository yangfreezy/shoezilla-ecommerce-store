import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Cart,
  Main,
  NotFound,
  Product,
  Purchase,
  PurchaseComplete,
  PurchaseConfirmation
} from "./Pages";
import { StoreContext } from "./Context";
import { getCache, getAllShoeData } from "./Helpers";

import "./App.css";

export const App = () => {
  const [shoes, setShoes] = useState(getCache("shoes") || []);
  const [shoeIdCache, setShoeIdCache] = useState(getCache("shoeIdCache") || {});
  const [requestAttempts, setRequestAttempts] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!shoes.length) {
      getAllShoeData(
        setShoes,
        setShoeIdCache,
        requestAttempts,
        setRequestAttempts
      );
    }
  }, [shoes, requestAttempts]);

  return (
    <StoreContext.Provider
      value={{ shoes, cart, setCart, shoeIdCache, setShoeIdCache }}
    >
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
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
        </div>
      </Router>
    </StoreContext.Provider>
  );
};
