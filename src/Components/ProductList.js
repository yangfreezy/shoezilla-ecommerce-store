import React, { useContext, useEffect } from "react";

import { ProductListItem, LoadingAnimation, Row } from ".";
import { StoreContext } from "./../Context";

export const ProductList = () => {
  const value = useContext(StoreContext);
  const { shoesList, setShoesList } = value;
  useEffect(() => {}, [shoesList, setShoesList]);
  return (
    <Row maxWidth="1200px" alingItems="flex-start">
      {shoesList && shoesList.length ? (
        shoesList.map(shoe => {
          const key = shoe.productId + "/" + shoe.colorId;
          return <ProductListItem product={shoe} key={key} />;
        })
      ) : (
        <LoadingAnimation />
      )}
    </Row>
  );
};
