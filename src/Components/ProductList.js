import React, { useContext } from "react";

import { StoreContext } from "./../Context";

export const ProductList = () => {
  const value = useContext(StoreContext);
  console.log(value);
  return (
    <div>
      {value.shoes.map(shoe => {
        console.log(shoe);
        return <div> {shoe.productName}</div>;
      })}
    </div>
  );
};
