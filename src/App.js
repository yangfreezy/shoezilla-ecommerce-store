import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Cart,
  Main,
  PageNotFound,
  ProductPage,
  Purchase,
  PurchaseComplete,
  PurchaseConfirmation
} from "./Pages";
import { getMensShoes } from "./API";
import { StoreContext } from "./Context";

export const App = () => {
  const [shoes, setShoes] = useState(
    JSON.parse(localStorage.getItem("shoes")) || []
  );
  const [shoeIdCache, setShoeIdCache] = useState(
    JSON.parse(localStorage.getItem("shoeIdCache")) || {}
  );
  const [requestAttempts, setRequestAttempts] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!shoes.length) {
      if (requestAttempts < 5) {
        (async () => {
          let shoeData = await getMensShoes();
          localStorage.setItem("shoes", JSON.stringify(shoeData));
          setShoes(shoeData);
          setRequestAttempts(requestAttempts + 1);
          const mappedIdCache = shoeData.reduce((cache, shoe) => {
            cache[shoe.productId] = shoe;
            return cache;
          }, {});
          localStorage.setItem("shoeIdCache", JSON.stringify(mappedIdCache));
          setShoeIdCache(mappedIdCache);
        })();
      }
    }
  }, [shoes, requestAttempts]);

  return (
    <StoreContext.Provider value={{ shoes, cart, shoeIdCache, setCart }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/product/:id" exact component={ProductPage} />
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
            <Route path="/:404" exact component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </StoreContext.Provider>
  );
};
