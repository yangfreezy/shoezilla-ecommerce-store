#Shoezilla

Live now at shoezilla.now.sh!

**_ Description _**
Shoezilla is an e-commerce shoe store built in React.js, using the following technologies:

- Create React App
- Styled Components
- Zappos API
- Context API

**_ Component Design _**

Following a permutation of the Atomic Design pattern by Brad Frost, skipping templates.

Categorized in decreasing order of abstraction:

- Pages - Pages that the viewers can see
- Organisms - Macro pieces of molecules that are meant to encompass a section of the page itself
- Molecules - Clusters of components used to create a wholistic piece of functionality or display
- Atoms - Specific instances of single utility components that only contain assets or abstracted components
- Atoms (Abstracted) - Backbone of components, can be passed props to customize CSS properties
- Layouts - Components that purely affect CSS

TODO:

- Link Stripe and PayPal to Cart / Checkout
- Add Purchase Confirmation page
- Add snapshot tests
- Save timestamps in localStorage for when data was last retrieved, retrieve data if it's been X amount of time since last request.
