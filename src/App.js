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

export const App = () => {
  const ThemeContext = React.createContext("store");
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!shoes.length) {
      let shoeData = getMensShoes();
      setShoes(shoeData);
    }
  }, [shoes]);

  return (
    <ThemeContext.Provider value="store">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/product/:product_id" exact component={ProductPage} />
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
    </ThemeContext.Provider>
  );
};
