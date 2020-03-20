import React from "react";

import { Router, Route, Switch } from "react-router";
import {
  Cart,
  Main,
  PageNotFound,
  ProductPage,
  Purchase,
  PurchaseComplete,
  PurchaseConfirmation
} from "./Pages";

function App() {
  const ThemeContext = React.createContext("store");
  return (
    <ThemeContext.Provider value="store">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="/:product_id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
            <Route path="/purchase-confirmation">
              <PurchaseConfirmation />
            </Route>
            <Route path="/purchase-complete">
              <PurchaseComplete />
            </Route>
            <Route path="/404">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
