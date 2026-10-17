# Simple Product Dashboard

A small React application built with Vite. It shows a list of products, lets the user show / hide the list, and lets the user type their name into a controlled input. All data is static (hard-coded).

## File Organization

```
/assignment1
 ├─ src/
 │   ├─ components/
 │   │   ├─ Card.jsx          # Layout component, wraps any children with a border, padding and margin
 │   │   ├─ Product.jsx       # Displays a single product (title, price) inside a Card
 │   │   └─ ProductList.jsx   # Holds the static product array and renders one Product per item with .map()
 │   ├─ App.jsx               # Root component, holds the state (showProducts, name)
 │   └─ main.jsx              # Entry point, renders App into the root element
 ├─ index.html
 └─ package.json
```

## Component Responsibilities

```
App                      (state: showProducts, name)
 ├─ h1, button, input, p
 └─ ProductList          (only rendered when showProducts is true)
     └─ Product          (props: title, price)
         └─ Card         (children)
```

- **App** owns all UI state with `useState`. The button toggles `showProducts`, the controlled input updates `name`.
- **ProductList** renders the products with `.map()` and uses the product `id` as a stable, unique `key`.
- **Product** only uses props and has no state, so it is reusable.
- **Card** accepts `children` and does not know what it renders.

## How to Run

```
npm install
npm run dev
```

## Challenges I Faced

- Deciding which component should own the state. I kept it in `App` and passed only plain data down as props, so `Product` and `Card` stay stateless and reusable.
- Remembering to use the product `id` as the `key` instead of the array index.
- Making the input a controlled input by connecting `value` and `onChange` to the `name` state.
- Using conditional rendering (`showProducts && <ProductList />`) instead of touching the DOM manually.
- Setting up the project with Vite and keeping `node_modules` out of the git repo with `.gitignore`.
