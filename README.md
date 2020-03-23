TODO:

STORIES:

Bugs to fix:

- Make page start at top of page when you go from main page to a product view
- Show loading animation when getting shoes on main page
- When localStorage is cleared and user goes directly to a product page, should display a loading animation and make a request to get shoes, store them in cache, then get product details

Maintenance:

- Add prop types where applicable

Phase 1:
(PRODUCT/CART)

- Swap quantity for "size", make add to cart button append one item to the cart.
- Add sizes, change Cart to be like { [id]: { 'sizes': { '9': 1 } } }
- Add global #ofItems as "size" property to cart, so you can display the number of the items in the cart quickly

Phase 2:
(CART)

- Displays products with quantities and price
- Link to Purchase Page
- Icon on top right updates with red numbers indicating number of items in the cart

Phase 3:
(PRODUCT/CART)

- Make a pop up appear, notifying you your item has been added to cart, cart preview with price.

Phase 4:
(PURCHASE)

- Form with email, address, billing info

Phase 5:
(PURCHASE CONFIRMATION)

- Displays entered data with payment info

Phase 6:
(PURCHASE COMPLETED)

- Displays that the order has been received
