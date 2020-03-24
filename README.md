TODO:

Phase 1:
(PRODUCT/CART)

- Swap quantity for "size", make add to cart button append one item to the cart.
- Add sizes as keys, change Cart to be like { [productId]: { 'sizes': { '9': 1 } } } (1 being quantity of product)
- Add global #ofItems as "size" property to cart, so you can display the number of the items in the cart quickly on nav
- Make a pop up appear after adding to cart, displaying item added to cart, with a summary of your purchase including tax.

Phase 2:
(CART)

- Displays products with quantities and price
- Link to Purchase Page

Phase 4:
(PURCHASE)

- Form with email, address, billing info.

Phase 5:
(PURCHASE CONFIRMATION)

- Displays entered data with payment info.

Phase 6:
(PURCHASE COMPLETED)

- Displays that the order has been received.
- Display order, provides tracking number.

Maintenance:

- Add prop types where applicable.

Optimizations:

- Save timestamps in localStorage for when data was last retrieved, retrieve data if it's been X amount of time since last request.
