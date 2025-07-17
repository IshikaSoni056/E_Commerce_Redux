# Video 
[![Video Title](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://drive.google.com/file/d/1dleSkxRLhw7PcpgCzDo9Hew9hCQb394M/view?usp=drive_link)
# React Redux Shopping Cart

A fully functional shopping cart application built using **React** and **Redux Toolkit**. This project demonstrates how to manage global state for cart operations in an e-commerce-like user interface, with clean routing and modular component structure.

---

## Features

- Product listing page  
- Add to cart / remove from cart functionality  
- View cart page with quantity and subtotal calculations  
- Increment and decrement item quantity  
- Navigation between pages using React Router  
- Global state management with Redux Toolkit  
- Simple and clean UI styled with basic CSS

---

## Installations

To set up the project, the following dependencies are required:

```bash
npm install react react-dom
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
```
## What the Dependencies Do

- **react**, **react-dom** – For building and rendering the user interface.
- **react-router-dom** – For routing between pages/components (e.g., Home, Cart).
- **@reduxjs/toolkit**, **react-redux** – For global state management using Redux.

---

## Redux Flow

### `cartSlice.js`

- Uses `createSlice()` from Redux Toolkit to define the `cart` slice.

#### Defines Actions:

- `addToCart`
- `removeFromCart`
- `incrementQuantity`
- `decrementQuantity`

#### Responsibilities:

- Manages the `cartItems` state.
- Provides logic for:
  - Adding/removing items.
  - Updating item quantities.
  - Calculating the cart subtotal and total quantity.

---

### `store.js`

- Configures the Redux store with the `cartReducer` from the slice.
- The store is provided to the entire app using the `<Provider>` component from `react-redux`.

---

## Usage in Components

### Dispatching Actions

Use `useDispatch()` from `react-redux` to trigger actions:

```js
dispatch(addToCart(product));
dispatch(removeFromCart(productId));
dispatch(incrementQuantity(productId));
dispatch(decrementQuantity(productId));
