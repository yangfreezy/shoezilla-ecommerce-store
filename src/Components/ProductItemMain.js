import React, { useState, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

import { StoreContext } from "./../Context";
import { getShoeDetails } from "./../API";
import { addShoeDetailsToCache } from "./../Helpers";
import {
  ActionText,
  ProductDetailsContainer,
  ProductItemName,
  ProductListBrandName,
  ProductListPrice,
  ProductItemImage,
  QuantityContainer
} from ".";

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductItemMain = () => {
  const value = useContext(StoreContext);
  const { shoeIdCache } = value;
  const { id } = useParams();
  const shoe = shoeIdCache[id];
  const [shoeDetails, setShoeDetails] = useState(shoe.details ? true : false);
  const [showDetails, setShowDetails] = useState(false);
  (async () => {
    if (!shoeDetails) {
      const details = await getShoeDetails(id);
      const { setShoeIdCache } = value;
      addShoeDetailsToCache(
        id,
        details,
        shoeIdCache,
        setShoeIdCache,
        setShoeDetails
      );
    }
  })();

  const showMoreDetails = () => {
    setShowDetails(true);
  };

  return shoe ? (
    <ProductItem>
      <ProductItemName name={shoe.productName} id={id} />
      <ProductListBrandName brandName={shoe.brandName} />
      <ProductItemImage src={shoe.thumbnailImageUrl} alt={shoe.productName} />
      <ProductListPrice price={shoe.price} />
      <QuantityContainer />
      {shoe.details && (
        <ActionText handleClick={showMoreDetails} text="Product details" />
      )}
      {showDetails && <ProductDetailsContainer />}
    </ProductItem>
  ) : (
    <Redirect to="/" />
  );
};
