import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "./../Context";

import {
  Column,
  ProductListBrandName,
  ProductListName,
  ProductListItemNote,
  ProductListThumbnail,
  Text
} from "./../Components";

import { priceWithTax } from "./../Helpers";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 100px 25px 100px;
  width: 35vw;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartView = () => {
  const value = useContext(StoreContext);
  const { cart, shoeIdCache } = value;
  const cartItems = cart.itemsCache || {};
  const [cartTotalBeforeShipping, setCartTotalBeforeShipping] = useState(0);
  const [cartTotalAfterShipping, setCartTotalAfterShipping] = useState(0);

  useEffect(() => {
    const cartTotals = getTotalPriceOfCart(cartItems);
    setCartTotalBeforeShipping(cartTotals.beforeShipping);
    setCartTotalAfterShipping(cartTotals.afterShipping);
    // eslint-disable-next-line
  }, []);

  const getTotalPriceOfCart = cartItems => {
    let totalBeforeShipping = 0;
    for (var productId in cartItems) {
      for (var productSizeQuantities in cartItems[productId]) {
        for (
          var productQuantity = 1;
          productQuantity <= cartItems[productId][productSizeQuantities];
          productQuantity++
        ) {
          const costAfterTax = +priceWithTax(
            shoeIdCache[productId].price
          ).total.slice(1);
          totalBeforeShipping += costAfterTax;
        }
      }
    }
    const totalAftershipping = (totalBeforeShipping + 5.99).toFixed(2);
    return {
      beforeShipping: "$" + totalBeforeShipping,
      afterShipping: "$" + totalAftershipping
    };
  };

  return (
    <Column>
      <Column>
        <Text fontSize="24px"> {"Cart"}</Text>
      </Column>
      {Object.keys(cartItems).map(productId => {
        const product = shoeIdCache[productId];
        const mostDetailedImage = product.details
          ? "https://www.zappos.com" + product.details.defaultImageUrl
          : product.thumbnailImageUrl;
        return (
          <StyledColumn key={productId + product.colorId}>
            <StyledRow>
              <Column alignItems="flex-start">
                <ProductListName
                  name={product.productName}
                  id={productId}
                  textAlign="left"
                />
                <ProductListBrandName
                  brandName={product.brandName}
                  id={productId}
                  fontSize="10px"
                  textAlign="left"
                />
                <ProductListThumbnail
                  src={mostDetailedImage}
                  id={productId}
                  width="125px"
                />
              </Column>
              <Column alignItems="flex-end" justifyContent="flex-end">
                <ProductListItemNote note={product.price} />
                <ProductListItemNote
                  note={priceWithTax(product.price).taxCost}
                  fontSize="10px"
                />
                <ProductListItemNote
                  note={priceWithTax(product.price).total}
                  fontSize="10px"
                />
                <select id="Quantity">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </Column>
            </StyledRow>
          </StyledColumn>
        );
      })}
      <Column>
        <Text> {`Subtotal: ${cartTotalBeforeShipping}`}</Text>
        <Text> {`Total: ${cartTotalAfterShipping}`}</Text>
      </Column>
    </Column>
  );
};
