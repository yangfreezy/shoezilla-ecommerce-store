import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { StoreContext } from "./../../Context";
import { getShoeDetails } from "./../../API";
import {
  deepCopyObj,
  createCartItem,
  getAndMapShoeData,
  insertIntoCache
} from "./../../Helpers";

import { SizeDisplay, ProductDetails, ProductItem } from "./../Molecules";
import { LoadingAnimation } from "./../Atoms";
import { PrimaryButton, Text } from "./../Atoms/Abstracted";
import { Row, Column } from "./../Layouts";

export const ProductView = React.memo(() => {
  /*** Parameters ***/
  const { productId } = useParams();

  /*** Context ***/
  const { shoeIdCache, setShoeIdCache, cart, setCart } = useContext(
    StoreContext
  );

  /*** Variable References ***/
  const currentShoe = shoeIdCache[productId];
  const shoeDetails = currentShoe
    ? currentShoe.details
      ? currentShoe.details
      : null
    : null;

  /*** State ***/
  // Default shoe size
  const [size, setSize] = useState(String(9));
  // Boolean to redirect on invalid productId's
  const [toHome, setToHome] = useState(false);

  /*** Hooks ***/
  // Gets all shoe data and gets shoe details if neither exist
  useEffect(() => {
    if (!currentShoe || !shoeDetails) {
      (async () => {
        let idCache = shoeIdCache;
        const details = await getShoeDetails(productId);
        if (!details) return setToHome(true);
        const cacheWithDetails = await deepCopyObj(idCache);
        cacheWithDetails[productId]["details"] = details;
        insertIntoCache("shoeIdCache", cacheWithDetails);
        setShoeIdCache(cacheWithDetails);

        if (!currentShoe) {
          const { rawDataList, mappedIdCache } = await getAndMapShoeData();
          insertIntoCache("shoes", rawDataList);
          if (!mappedIdCache[productId]) return setToHome(true);
          idCache = mappedIdCache;
        }
      })();
    }
    //eslint-disable-next-line
  }, []);

  if (toHome) return <Redirect to="/" />;
  else if (!shoeDetails) return <LoadingAnimation />;
  else {
    return (
      <Row>
        <Column justifyContent="flex-start" margin="25px 100px">
          <ProductItem product={currentShoe} productId={productId} />
          <Text text={currentShoe.price} />
          <SizeDisplay setSize={setSize} size={size} />
          <PrimaryButton
            value="Add to Cart"
            handleClick={() => createCartItem(cart, productId, size, setCart)}
          />
        </Column>
        <Column justifyContent="flex-start" margin="25px 100px">
          <ProductDetails details={shoeDetails} />
        </Column>
      </Row>
    );
  }
});
