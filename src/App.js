import React from "react";

import { Router, Route, Switch } from "react-router";
import {
  Nav,
  ProductList,
  ProductItem,
  Cart,
  ProductNotFound
} from "./Components";

function App() {
  const ThemeContext = React.createContext("store");
  return (
    <ThemeContext.Provider value="store">
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/">
              <ProductList />
            </Route>
            <Route path="/:product_id">
              <ProductItem />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/404">
              <ProductNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
